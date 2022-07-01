import { GOOGLE_WEB_CLIENT_ID } from '@env';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import { useStore } from '../modules/stores/store';

const useSignInGoogle = () => {
  const { signInGoogle } = useStore().userStore;

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: GOOGLE_WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response) {
      signInGoogle(response);
    }
  }, [response]);

  const signIn = () => {
    try {
      promptAsync();
    } catch (err) {}
  }

  return [signIn, !request] as const; 
}

export default useSignInGoogle;