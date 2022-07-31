import { createContext, useContext } from 'react';
import UserStore from './userStore';
import ProfileStore from './profileStore';
import MatchStore from './matchStore';
import MessageStore from './messageStore';
interface Store {
  userStore: UserStore;
  profileStore: ProfileStore;
  matchStore: MatchStore;
  messageStore: MessageStore;
}

export const store: Store = {
  userStore: new UserStore(),
  profileStore: new ProfileStore(),
  matchStore: new MatchStore(),
  messageStore: new MessageStore(),
}

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext)
}
