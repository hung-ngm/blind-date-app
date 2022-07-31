import { Message } from '../../types/message';
import { makeAutoObservable, runInAction } from 'mobx'
import {
  doc,
  setDoc,
  addDoc,
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
  orderBy,
  limit,
  startAfter
} from '@firebase/firestore'
import { db } from '../utils/firebase'
import { store } from './store'

class MessageStore {
  messagesMap = new Map<String, Message>();
  messageLimit = 15;
  hasMore = false;
  lastMessageTimestamp: FieldValue | null = null;
  sending = false;
  unsubscribeMessages?: Unsubscribe;

  constructor() {
    makeAutoObservable(this)
  }

  get messages(): Message[] {
    return Array.from(this.messagesMap.values()).sort(
      (a, b) => a.timestamp?.getTime() - b.timestamp?.getTime()
    ).reverse();
  }

  // Messages will be stored as the sub-collection of a Match document in the matches collection
  loadMessages = async (matchId: string) => {
    this.messagesMap.clear();
    this.unsubscribeMessages && this.unsubscribeMessages();

    this.unsubscribeMessages = onSnapshot(
      query(
        collection(db, 'matches', matchId, 'messages'),
        orderBy('timestamp', 'desc'),
        limit(this.messageLimit),
      ),
      this.setMessages
    );
  }
 
  loadMore = async () => {
    if (!this.hasMore) return;

    const { currentMatch } = store.matchStore;
    if (!currentMatch) return;

    const messageQuerySnap = await getDocs(
      query(
        collection(db, 'matches', currentMatch.id, 'messages'),
        orderBy('timestamp', 'desc'),
        startAfter(this.lastMessageTimestamp),
        limit(this.messageLimit)
      )
    );

    this.setMessages(messageQuerySnap);
  } 

  sendMessage = async (value: string) => {
    const { userProfile } = store.profileStore;
    const { currentMatch } = store.matchStore;

    if (!userProfile || !currentMatch || this.sending || value === "") {
      return false;
    }

    this.sending = true;

    const matchRef = doc(db, "matches", currentMatch.id);

    await addDoc(
      collection(matchRef, 'messages'),
      {
        value,
        senderId: userProfile.id,
        photoUrl: userProfile.photoUrl,
        timestamp: serverTimestamp()
      }
    );

    await setDoc(
      matchRef,
      {
        lastMessage: value,
      },
      {
        merge: true,
      }
    );

    runInAction(() => {
      this.sending = false;
    })

    return true;
  }

  private setMessages = (snap: QuerySnapshot<DocumentData>) => {
    this.checkHasMore(snap);

    snap.docs.forEach((doc) => {
      if (!doc.exists()) return;

      this.setLastMessageTimestamp(doc);

      this.messagesMap.set(doc.id, this.getMessage(doc));
    })
  }

  private getMessage = (snap: QueryDocumentSnapshot<DocumentData>): Message => {
    return {
      id: snap.id,
      value: snap.data().value,
      senderId: snap.data().senderId,
      photoUrl: snap.data().photoUrl,
      timestamp: new Date(snap.data().timestamp?.toDate()),
    }
  }

  private checkHasMore = (snap: QuerySnapshot<DocumentData>) => {
    if (snap.size < this.messageLimit) {
      this.hasMore = false;
    } else {
      this.hasMore = true;
    }
  }

  private setLastMessageTimestamp = (
    doc: QueryDocumentSnapshot<DocumentData>
  ) => {
    if (!this.lastMessageTimestamp) {
      this.lastMessageTimestamp = doc.data().timestamp;
    } else {
      const lastTimestamp = new Date(
        // @ts-ignore
        this.lastMessageTimestamp?.toDate()
      ).getTime();

      const currentTimestamp = new Date(
        doc.data().timestamp?.toDate()
      ).getTime();

      if (currentTimestamp < lastTimestamp) {
        this.lastMessageTimestamp = doc.data().timestamp;
      }
    }
  }
 
  resetStore = () => {
    this.messagesMap.clear();
    this.messageLimit = 15;
    this.hasMore = false;
    this.lastMessageTimestamp = null;
    this.sending = false;

    if (this.unsubscribeMessages) {
      this.unsubscribeMessages();
      this.unsubscribeMessages = undefined;
    }
  }
}

export default MessageStore;