import { Profile } from '../../types/profile'
import { Match } from '../../types/match'
import { User } from '../../types/user'
import { makeAutoObservable, runInAction } from 'mobx'
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
  DocumentData,
  serverTimestamp,
  FieldValue,
  Unsubscribe,
  onSnapshot,
  query,
  collection,
  where,
  orderBy,
  limit,
  startAfter
} from '@firebase/firestore'
import { db } from '../utils/firebase'
import { store } from './store'

class MatchStore {
  currentMatch: Match | null = null
  matchesMap = new Map<string, Match>()
  matchesLimit = 15
  hasMore = false
  lastMatchTimestamp: FieldValue | null = null
  unsubscribeMatches?: Unsubscribe

  constructor() {
    makeAutoObservable(this)
  }

  get matches(): Match[] {
    return Array.from(this.matchesMap.values())
    .sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    )
  }

  subscribeStore = async (user: User) => {
    this.unsubscribeMatches = onSnapshot(
      query(
        collection(db, 'matches'),
        where('userMatched', 'array-contains', user.uid),
        orderBy('timestamp', 'desc'),
        limit(this.matchesLimit),
      ),
      this.setMatches,
    )
  }

  loadMore = async () => {
    if (!this.hasMore) return;

    const { user } = store.userStore;

    if (!user) return;

    const matchesSnap = await getDocs(
      query(
        collection(db, "matches"),
        where("userMatched", "array-contains", user.uid),
        orderBy("timestamp", "desc"),
        startAfter(this.lastMatchTimestamp),
        limit(this.matchesLimit)
      )
    )

    this.setMatches(matchesSnap);
  };

  // check if the user swiped by current user has already wanted to match
  checkMatch = async (userProfile: Profile, userSwipedBy: Profile) => {
    const userWasMatched = await getDoc(
      doc(db, 'users', userSwipedBy.id, 'likes', userProfile.id),
    )

    if (userWasMatched.exists()) {
      return this.createMatch(userProfile, userSwipedBy)
    }
  }

  // Create a new match in the "matches" collection with key is combinedId and value is an object with Match type
  createMatch = async (userProfile: Profile, userSwipedBy: Profile) => {
    try {
      const matchDoc = doc(
        db,
        'matches',
        this.combineIds(userProfile.id, userSwipedBy.id),
      )
      
      await setDoc(matchDoc, {
        users: {
          [userProfile.id]: userProfile,
          [userSwipedBy.id]: userSwipedBy,
        },
        userMatched: [userProfile.id, userSwipedBy.id],
        timestamp: new Date(),
        canChat: false,
      })
      
      const match = await getDoc(matchDoc)
      if (!match.exists()) return false;
      this.currentMatch = this.getMatch(match)
      return true;
  
    } catch (error) {
      console.log(error);
      return false;
    }      
  }

  selectMatch = async (id: string) => {
    if (!this.matchesMap.has(id)) {
      this.currentMatch = null;
      return false;
    }

    try {
      this.currentMatch = this.matchesMap.get(id) as Match;
      await store.messageStore.loadMessages(this.currentMatch.id);
      await store.placeStore.loadPlace(this.currentMatch.id);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  setMatchCanChat = () => {
    if (!this.currentMatch) return;
    this.currentMatch.canChat = true;
    const matchDoc = doc(db, 'matches', this.currentMatch.id)
    setDoc(matchDoc, { 
      timestamp: this.currentMatch.timestamp,
      userMatched: this.currentMatch.userMatched,
      users: this.currentMatch.users,
      canChat: true 
    })
  
  }

  private getMatch = (snap: QueryDocumentSnapshot<DocumentData>): Match => {
    return {
      id: snap.id,
      users: snap.data().users,
      userMatched: snap.data().userMatched,
      lastMessage: snap.data().lastMessage,
      timestamp: new Date(snap.data().timestamp?.toDate()),
      canChat: snap.data().canChat,
    }
  }

  private setMatches = (snap: QuerySnapshot<DocumentData>) => {
    this.checkHasMore(snap);

    snap.docs.forEach((doc) => {
      if (!doc.exists()) return

      this.setLastMatchTimestamp(doc)

      this.matchesMap.set(doc.id, this.getMatch(doc))
    })
  }

  private checkHasMore = (snap: QuerySnapshot<DocumentData>) => {
    if (snap.size < this.matchesLimit) {
      this.hasMore = false;
    } else {
      this.hasMore = true;
    }
  }

  private setLastMatchTimestamp = (
    doc: QueryDocumentSnapshot<DocumentData>
  ) => {
    if (!this.lastMatchTimestamp) {
      this.lastMatchTimestamp = doc.data().timestamp;
    } else {
      const lastTimestamp = new Date(
        // @ts-ignore
        this.lastMatchTimestamp?.toDate()
      ).getTime();

      const currentTimestamp = new Date(
        doc.data().timestamp?.toDate()
      ).getTime();

      if (currentTimestamp < lastTimestamp) {
        this.lastMatchTimestamp = doc.data().timestamp;
      }
    }
  }

  private combineIds = (firstProfileId: string, secondProfileId: string) => {
    return firstProfileId > secondProfileId
      ? firstProfileId + secondProfileId
      : secondProfileId + firstProfileId
  }

  resetStore = () => {
    this.currentMatch = null
    this.matchesMap.clear()
    this.matchesLimit = 15
    this.hasMore = false
    this.lastMatchTimestamp = null

    if (this.unsubscribeMatches) {
      this.unsubscribeMatches()
      this.unsubscribeMatches = undefined
    }
  }
}

export default MatchStore
