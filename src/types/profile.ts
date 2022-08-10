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
  priceMin: number;
  priceMax: number;
  city: string;
  country: string;
  categories: Array<string>;
  // timestamp?: Date;
}