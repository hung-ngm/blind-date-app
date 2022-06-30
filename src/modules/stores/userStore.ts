import { auth } from '../utils/firebase';
import { User } from '../../types/user';
import { User as FirebaseUser } from '@firebase/auth';
import { makeAutoObservable } from 'mobx';

class UserStore {
  user: User | null = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.user = null;
  };

  signOut = async () => {
    await auth.signOut();

  }

  setUser = (user : FirebaseUser | null) => {
    if (user) {
      this.user = {
        email: user.email!,
        name: user.displayName!,
        photoUrl: user.photoURL!,
      };
    } else {
      this.user = null;
    }

    this.loading = false;
  }


}

export default UserStore;