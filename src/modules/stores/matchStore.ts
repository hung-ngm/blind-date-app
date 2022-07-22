import { Profile } from '../../types/profile';
import { Match } from '../../types/match';
import { User } from '../../types/user';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
  DocumentData,
  serverTimestamp,
} from '@firebase/firestore';
import { db } from '../utils/firebase';

class MatchStore {
  currentMatch: Match | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // check if the user swiped by current user has already wanted to match
  checkMatch = async (userProfile: Profile, userSwipedBy: Profile) => {
    const userWasMatched = await getDoc(
      doc(db, "users", userSwipedBy.id, "likes", userProfile.id)
    )

    if (userWasMatched.exists()) {
      this.createMatch(userProfile, userSwipedBy);
    }
  }

  // Create a new match in the "matches" collection with key is combinedId and value is an object with Match type
  createMatch = async (userProfile: Profile, userSwipedBy: Profile) => {
    const matchDoc = doc(
      db,
      "matches",
      this.combineIds(userProfile.id, userSwipedBy.id)
    );

    await setDoc(
      matchDoc,
      {
        users: {
          [userProfile.id]: userProfile,
          [userSwipedBy.id]: userSwipedBy
        },
        userMatched: [userProfile.id, userSwipedBy.id],
        timestamp: serverTimestamp(),
      }
    );

    const match = await getDoc(matchDoc);

    if (!match.exists()) return;

    this.currentMatch = this.getMatch(match);
  }

  getMatch = (snap: QueryDocumentSnapshot<DocumentData>) : Match => {
    return {
      users: snap.data().users,
      userMatched: snap.data().userMatched,
      timestamp: new Date(snap.data().timestamp?.toDate())
    }
  }

  private combineIds = (firstProfileId: string, secondProfileId: string) => {
    return (firstProfileId > secondProfileId) ? (firstProfileId + secondProfileId) : (secondProfileId + firstProfileId)
  }

}

export default MatchStore;