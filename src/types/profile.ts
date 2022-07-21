import { Place } from './place';

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  job: string;
  photoUrl: string;
  prompt: string;
  promptAnswer: string;
  gender: string;
  passions: Array<String>;
  idealPlace?: Place;
  timestamp?: Date;
}