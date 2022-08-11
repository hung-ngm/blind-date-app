import { auth, signInWithPhoneNumber, db } from '../utils/firebase';
import { User } from '../../types/user';
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged, User as FirebaseUser } from '@firebase/auth';
import { makeAutoObservable, runInAction, reaction } from 'mobx';
import { AuthSessionResult } from 'expo-auth-session';
import { doc, setDoc, Unsubscribe } from '@firebase/firestore';
import { Place } from '../../types/place';
import { getAge } from '../../modules/utils/userUtils';
import { store } from './store';
import { Categories, Passions, Profile } from '../../types/profile';

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
      // // Test only
      // this.updateUserProfile({
      //   firstName: "Hung",
      //   lastName: "Nguyen",
      //   age: 20,
      //   job: "Software Engineer",
      //   photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
      //   prompt: "My pleasure is",
      //   promptAnswer: "Coding",
      //   gender: "MAN",
      //   passions: [Passions.ART, Passions.DANCING, Passions.COOKING],
      //   priceMin: 15,
      //   priceMax: 100,
      //   city: "Sydney",
      //   country: "Australia",
      //   categories: [Categories.CAFES, Categories.SEAFOOD, Categories.PIZZA],
      //   distance: 40,
      // });
    } else {
      this.user = null;
    }
    this.userLoading = false;
  }

  updateUserProfile = async (profile: Profile) => {
    if (!this.user) return;

    await setDoc(doc(db, "users", this.user.uid), {
      ...profile,
      id: this.user.uid,
    })
  } 
}

export default UserStore;