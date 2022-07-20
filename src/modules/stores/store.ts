import { createContext, useContext } from 'react';
import UserStore from './userStore';
import ProfileStore from './profileStore';
interface Store {
  userStore: UserStore;
  profileStore: ProfileStore;
}

export const store: Store = {
  userStore: new UserStore(),
  profileStore: new ProfileStore(),
}

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext)
}

export const resetStore = () => {
  store.userStore.reset();
}