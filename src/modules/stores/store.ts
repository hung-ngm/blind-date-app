import { createContext, useContext } from 'react';
import UserStore from './userStore';
import ProfileStore from './profileStore';
import MatchStore from './matchStore';
interface Store {
  userStore: UserStore;
  profileStore: ProfileStore;
  matchStore: MatchStore;
}

export const store: Store = {
  userStore: new UserStore(),
  profileStore: new ProfileStore(),
  matchStore: new MatchStore(),
}

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext)
}
