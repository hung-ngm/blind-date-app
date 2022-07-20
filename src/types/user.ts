import { Gender } from "../modules/profile/context/ProfileProvider";

export interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  job: string;
  photoUrl: string;
  phoneNumber: string;
  birthday: Date;
}