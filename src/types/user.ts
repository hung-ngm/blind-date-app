import { Gender } from '../modules/profile/context/ProfileProvider';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoUrl: string;
  phoneNumber: string;
}