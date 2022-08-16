import { CategoryType, GenderType, PassionType, Profile } from '../../types/profile';
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
import { db, storage } from '../utils/firebase';
import { store } from './store';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const DEFAULT_USER_PROFILE: Profile = {
  id: '',
  firstName: '',
  lastName: '',
  age: 0,
  job: '',
  photoUrl: '',
  prompt: '',
  promptAnswer: '',
  gender: null,
  passions: [],
  distance: 0,
  priceMin: 0,
  priceMax: 0,
  city: '',
  country: '',
  categories: [],
};
class ProfileStore {
  profilesMap =  new Map<String, Profile>();
  userProfile: Profile = DEFAULT_USER_PROFILE;
  profileLoading = true;
  unsubscribeUserProfile?: Unsubscribe;
  unsubscribeProfiles?: Unsubscribe;

  constructor() {
    makeAutoObservable(this);
  }

  // setters for userProfile
  setFirstName = (fname: string) => {
    this.userProfile.firstName = fname;
  }

  setLastName = (lname: string) => {
    this.userProfile.lastName = lname;
  }

  setJob = (job: string) => {
    this.userProfile.job = job;
  }

  setAge = (age: number) => {
    this.userProfile.age = age;
  }

  setPhotoUrl = async (base64String: string | null | undefined) => {
    try {
      if (!base64String) {
        return null;
      }
      const resp = await fetch(`data:image/jpeg;base64,${(base64String)}`)
      const imageBlob = await resp.blob();
      const avatarRef = ref(storage, `users/avatar/${this.userProfile.id}.jpg`);
      const snapshot = await uploadBytes(avatarRef, imageBlob);    
      const avatarUrl = await getDownloadURL(snapshot.ref);
      runInAction(() => {
        this.userProfile.photoUrl = avatarUrl;
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  setGender = (gender: GenderType) => {    
    this.userProfile.gender = gender;
  }

  setPassions = (passions: PassionType[]) => {
    this.userProfile.passions = passions;
  }

  setCity = (city: string) => {
    this.userProfile.city = city;
  }

  setCountry = (country: string) => {
    this.userProfile.country =  country;
  }

  setDistance = (distance: number) => {
    this.userProfile.distance = distance;
  }

  setPriceMin = (priceMin: number) => {
    this.userProfile.priceMin = priceMin;
  }

  setPriceMax = (priceMax: number) => {
    this.userProfile.priceMax = priceMax;
  }

  setCategories = (categories: CategoryType[]) => {
    this.userProfile.categories = categories;
  }

  setPrompt = (prompt: string) => {
    this.userProfile.prompt = prompt;
  }

  setPromptAnswer = (promptAnswer: string) => {
    this.userProfile.promptAnswer = promptAnswer;
  }

  updateUserProfile = async () => {
    try {
      await setDoc(doc(db, "users", this.userProfile.id), this.userProfile);
    }
    catch(err) {
      console.log(err);
    }
  } 
  //

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
            this.userProfile = DEFAULT_USER_PROFILE;
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
      distance: snap.data().distance,
      priceMin: snap.data().priceMin,
      priceMax: snap.data().priceMax,
      city: snap.data().city,
      country: snap.data().country,
      categories: snap.data().categories
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

    return await store.matchStore.checkMatch(this.userProfile, userSwipedBy);
  }


  resetStore = () => {
    this.profilesMap.clear();
    this.userProfile = DEFAULT_USER_PROFILE;
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

  isProfileCompleted = () => {
    return !(this.userProfile.id === ''
    || this.userProfile.firstName === ''
    || this.userProfile.lastName === ''
    || this.userProfile.age === 0
    || this.userProfile.job === ''
    || this.userProfile.photoUrl === ''
    || this.userProfile.prompt === ''
    || this.userProfile.promptAnswer === ''
    || this.userProfile.gender === null
    || this.userProfile.passions === []
    || this.userProfile.distance === 0
    || this.userProfile.priceMin === 0
    || this.userProfile.priceMax === 0
    || this.userProfile.city === ''
    || this.userProfile.country === ''
    || this.userProfile.categories === [])
  }
}

export default ProfileStore;