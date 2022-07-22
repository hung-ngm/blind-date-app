import { Profile } from '../../types/profile';
import { User } from '../../types/user';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  collection,
  doc,
  Unsubscribe,
  onSnapshot,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
  QuerySnapshot,
  query,
  where
} from '@firebase/firestore';
import { db } from '../utils/firebase';
import { store } from './store';

class ProfileStore {
  profilesMap =  new Map<String, Profile>();
  userProfile: Profile | null = null;
  profileLoading = true;
  unsubscribeUserProfile?: Unsubscribe;
  unsubscribeProfiles?: Unsubscribe;

  constructor() {
    makeAutoObservable(this);
  }

  get profiles() {
    return Array.from(this.profilesMap.values());
  }

  subscribeStore = async (user: User) => {
    this.unsubscribeUserProfile = onSnapshot(
      doc(db, "users", user.uid), 
      (snap) => {
        runInAction(() => {
          if (snap.exists()) {
            this.userProfile = this.getProfile(snap)
          } else {
            this.userProfile = null;
          }
        })
        this.profileLoading = false;
      }
    )

    // Get all the users ids that this user did not like
    const passedIds = await getDocs(
      collection(db, "users", user.uid, "passes")
    ).then((snap) => snap.docs.map((doc) => doc.id));

    // Get all the users ids that this user liked
    const matchedIds = await getDocs(
      collection(db, "users", user.uid, "matches")
    ).then((snap) => snap.docs.map((doc) => doc.id));
    
    // Only return the users that this user has not swiped left or right by
    this.unsubscribeProfiles = onSnapshot(
      query (
        collection(db, "users"),
        where("id", "not-in", [...passedIds, ...matchedIds, user.uid])
      ),
      this.setProfiles
    )
  }  

  getProfile = (snap: QueryDocumentSnapshot<DocumentData>): Profile => {
    return {
      id: snap.data().id,
      firstName: snap.data().firstName,
      lastName: snap.data().lastName,
      age: snap.data().age,
      job: snap.data().job,
      photoUrl: snap.data().photoUrl,
      prompt: snap.data().prompt,
      promptAnswer: snap.data().promptAnswer,
      gender: snap.data().gender,
      passions: snap.data().passions,
      idealPlace: snap.data().idealPlace,
      timestamp: new Date(snap.data().timeStamp?.toDate())
    }
  }

  setProfiles = (snap: QuerySnapshot<DocumentData>) => {
    snap.docs.forEach((doc) => {
      if (doc.exists()) {
        this.profilesMap.set(doc.id, this.getProfile(doc))
      }
    })
  }

  resetStore = () => {
    this.profilesMap.clear();
    this.userProfile = null;
    this.profileLoading = true;

    if (this.unsubscribeProfiles) {
      this.unsubscribeProfiles();
      this.unsubscribeProfiles = undefined;
    }

    if (this.unsubscribeUserProfile) {
      this.unsubscribeUserProfile();
      this.unsubscribeUserProfile = undefined;
    }
  }
 
}

export default ProfileStore;