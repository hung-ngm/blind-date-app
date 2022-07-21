import { Place } from './place';

export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  job: string;
  photoURL: string;
  prompt: string;
  promptAnswer: string;
  timestamp?: Date;
  gender: String;
  passions: Array<String>;
  idealPlace: Place;
}