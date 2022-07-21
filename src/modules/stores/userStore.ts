import { auth, signInWithPhoneNumber, db } from '../utils/firebase';
import { User } from '../../types/user';
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged, User as FirebaseUser } from '@firebase/auth';
import { makeAutoObservable, runInAction, reaction } from 'mobx';
import { AuthSessionResult } from 'expo-auth-session';
import { resetStore } from './store';
import { doc, setDoc, serverTimestamp, Unsubscribe } from '@firebase/firestore';
import { Place } from '../../types/place';
import { getAge } from '../../modules/utils/userUtils';
import { store } from './store';

class UserStore {
  user: User | null = null;
  userLoading = true;
  unsubscribeUser: Unsubscribe;

  constructor() {
    makeAutoObservable(this);

    this.unsubscribeUser = onAuthStateChanged(auth, (user) => {
      this.setUser(user);
    });

    reaction(
      () => this.user,
      (user) => {
        if (user) {
          store.profileStore.subscribeStore(user);
        }
      }
    )
  }

  signInGoogle = async (response: AuthSessionResult) => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      await signInWithCredential(auth, credential);
    }
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

  setUser = (user : FirebaseUser | null) => {
    if (user) {
      this.user = {
        uid: user.uid,
        email: user.email!,
        phoneNumber: user.phoneNumber!
      };
    } else {
      this.user = null;
    }
    this.userLoading = false;
  }

  updateUserProfile = async (
    firstName: string,
    lastName: string,
    birthday: Date,
    job: string, 
    photoUrl: string,
    prompt: string, 
    promptAnswer: string, 
    gender: string, 
    passions: Array<String>, 
    idealPlace: Place
  ) => {
    if (!this.user) return;

    const age = getAge(birthday);

    await setDoc(doc(db, "users", this.user.uid), {
      id: this.user.uid,
      firstName: firstName,
      lastName: lastName,
      age: age,
      job: job,
      photoUrl: photoUrl,
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