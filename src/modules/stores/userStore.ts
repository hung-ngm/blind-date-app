import { auth, signInWithPhoneNumber } from '../utils/firebase';
import { User } from '../../types/user';
import { GoogleAuthProvider, signInWithCredential, User as FirebaseUser } from '@firebase/auth';
import { makeAutoObservable, runInAction } from 'mobx';
import { AuthSessionResult } from 'expo-auth-session';
import { resetStore } from './store';
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

  setUser = (user : FirebaseUser | null) => {
    if (user) {
      this.user = {
        uid: user.uid!,
        email: user.email!,
        name: user.displayName!,
        photoUrl: user.photoURL!,
        phoneNumber: user.phoneNumber!
      };
    } else {
      this.user = null;
    }
    this.loading = false;
  }
}

export default UserStore;