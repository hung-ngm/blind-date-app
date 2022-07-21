import { auth, signInWithPhoneNumber, db } from '../utils/firebase';
import { User } from '../../types/user';
import { GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
import { makeAutoObservable, runInAction } from 'mobx';
import { AuthSessionResult } from 'expo-auth-session';
import { resetStore } from './store';
import { doc, setDoc, serverTimestamp } from '@firebase/firestore';
import { Place } from '../../types/place';
import { getAge } from '../../modules/utils/userUtils';

class UserStore {
  user: User | null = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.user = null;
  };

  signInGoogle = async (response: AuthSessionResult) => {
    this.loading = true;

    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      await signInWithCredential(auth, credential);
    }

    runInAction(() => {
      this.loading = false;
    });
  }

  // signUpMobilePhone = async () => {
  //   this.loading = true;

  //   const appVerifier = window.recaptchaVerifier;

  //   if (this.user && this.user.phoneNumber) {
  //     await signInWithPhoneNumber(auth, this.user.phoneNumber, appVerifier);
  //   }

  //   runInAction(() => {
  //     this.loading = false;
  //   });
  // }

  signOut = async () => {
    await auth.signOut();
    resetStore();
  }

  setUser = (user : User | null) => {
    if (user) {
      this.user = {
        uid: user.uid,
        email: user.email!,
        firstName: user.firstName!,
        lastName: user.lastName!,
        photoUrl: user.photoUrl!,
        phoneNumber: user.phoneNumber!,
        birthday: user.birthday!,
      };
    } else {
      this.user = null;
    }
    this.loading = false;
  }

  updateUserProfile = async (
    job: string, 
    prompt: string, 
    promptAnswer: string, 
    gender: string, 
    passions: Array<String>, 
    idealPlace: Place
  ) => {
    if (!this.user) return;

    const age = getAge(this.user);

    await setDoc(doc(db, "users", this.user.uid), {
      id: this.user.uid,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      age: age,
      job: job,
      photoUrl: this.user.photoUrl,
      prompt: prompt,
      promptAnswer: promptAnswer,
      gender: gender,
      passions: passions,
      idealPlace: idealPlace,
      timestamp: serverTimestamp(),
    })
  } 
}

export default UserStore;