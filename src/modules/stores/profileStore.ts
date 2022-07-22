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
  QuerySnapshot
} from '@firebase/firestore';
import { db } from '../utils/firebase';

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

    this.unsubscribeProfiles = onSnapshot(
      collection(db, "users"),
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