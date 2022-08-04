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
  where,
  setDoc
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
    const dislikedIds = await getDocs(
      collection(db, "users", user.uid, "dislikes")
    ).then((snap) => snap.docs.map((doc) => doc.id));

    // Get all the users ids that this user liked
    const likedIds = await getDocs(
      collection(db, "users", user.uid, "likes")
    ).then((snap) => snap.docs.map((doc) => doc.id));
    
    // Only return the users that this user has not swiped left or right by
    this.unsubscribeProfiles = onSnapshot(
      query (
        collection(db, "users"),
        where("id", "not-in", [...dislikedIds, ...likedIds, user.uid])
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
      priceMin: snap.data().priceMin,
      priceMax: snap.data().priceMax,
      city: snap.data().city,
      country: snap.data().country,
      categories: snap.data().categories
      // idealPlace: snap.data().idealPlace,
      // timestamp: new Date(snap.data().timeStamp?.toDate())
    }
  }

  setProfiles = (snap: QuerySnapshot<DocumentData>) => {
    snap.docs.forEach((doc) => {
      if (doc.exists()) {
        this.profilesMap.set(doc.id, this.getProfile(doc))
      }
    })
  }

  unlikeProfile = async (cardIndex: number) => {
    if (this.profiles.length <= cardIndex || cardIndex < 0) return;

    const userSwipedBy = this.profiles[cardIndex];

    if (!this.userProfile) return;

    await setDoc(
      doc(db, "users", this.userProfile.id, "dislikes", userSwipedBy.id), 
      {
        id: userSwipedBy.id,
      }
    )
  }

  likeProfile = async (cardIndex: number) => {
    if (this.profiles.length <= cardIndex || cardIndex < 0) return;

    const userSwipedBy = this.profiles[cardIndex];

    if (!this.userProfile) return;

    await setDoc(
      doc(db, "users", this.userProfile.id, "likes", userSwipedBy.id),
      {
        id: userSwipedBy.id,
      }
    )

    await store.matchStore.checkMatch(this.userProfile, userSwipedBy);
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