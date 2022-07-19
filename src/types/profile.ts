import { Place } from './place';
import { Gender } from '../modules/profile/context/ProfileProvider';

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  job: string;
  photoUrl: string;
  prompt: string;
  promptAnswer: string;
  timestamp?: Date;
  birthday: Date;
  gender: Gender;
  passions: Array<String>;
  idealPlace: Place;
}