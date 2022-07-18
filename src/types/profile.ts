export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  job: string;
  photoURL: string;
  promptStart: string;
  promptEnd: string;
  timestamp?: Date;
  gender: String;
  passions: Array<String>;
}