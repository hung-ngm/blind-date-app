import { auth, signInWithPhoneNumber, db } from '../utils/firebase';
import { User } from '../../types/user';
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged, User as FirebaseUser } from '@firebase/auth';
import { makeAutoObservable, runInAction, reaction } from 'mobx';
import { AuthSessionResult } from 'expo-auth-session';
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
          store.matchStore.subscribeStore(user);
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
    if (this.user) {
      store.profileStore.resetStore();
      store.matchStore.resetStore();
      store.messageStore.resetStore();
      await auth.signOut();
    }
  }

  setUser = (user : FirebaseUser | null) => {
    if (user) {
      this.user = {
        uid: user.uid,
        email: user.email!,
        phoneNumber: user.phoneNumber!
      };
      // Test only
      this.updateUserProfile(
        "Hung",
        "Nguyen",
        new Date(2002, 7, 15),
        "Software Engineer",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
        "My pleasure is",
        "Coding",
        "male",
        ["coding", "reading", "talking"],
        15,
        100,
        "Sydney",
        "Australia",
        ["cafes", "fast food", "vietnamese"]
      );
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
    priceMin: number,
    priceMax: number,
    city: string,
    country: string,
    categories: Array<string>,
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
      priceMin: priceMin,
      priceMax: priceMax,
      city: city,
      country: country,
      categories: categories
      // timestamp: serverTimestamp(),
    })
  } 
}

export default UserStore;