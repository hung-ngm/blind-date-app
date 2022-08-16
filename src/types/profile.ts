// Gender
export const Gender = {
  MAN: "MAN",
  WOMAN: "WOMAN",
  OTHER: "OTHER",
};

export const GenderNames = {
  [Gender.MAN]: "Man",
  [Gender.WOMAN]: "Woman",
  [Gender.OTHER]: "Other",
}

export type GenderType = keyof typeof Gender;

// Passions
export const Passions = {
  PHOTOGRAPHY: "PHOTOGRAPHY",
  EXERCISE: "EXERCISE",
  DANCING: "DANCING",
  POLITICS: "POLITICS",
  COOKING: "COOKING",
  RUN: "RUN",
  PET: "PET",
  ART: "ART",
  TRAVELLING: "TRAVELLING",
  MUSIC: "MUSIC",
}

export const PassionNames = {
  [Passions.PHOTOGRAPHY]: 'Photography',
  [Passions.EXERCISE]: 'Exercise',
  [Passions.DANCING]: 'Dancing',
  [Passions.POLITICS]: 'Politics',
  [Passions.COOKING]: 'Cooking',
  [Passions.RUN]: 'Run',
  [Passions.PET]: 'Pet',
  [Passions.ART]: 'Art',
  [Passions.TRAVELLING]: 'Travelling',
  [Passions.MUSIC]: 'Music',
}

export type PassionType = keyof typeof Passions;

// Restaurant Categories
export const Categories = {
  BUFFET: "BUFFET",
  CAFES: "CAFES",
  BREAKFAST_BRUNCH: "BREAKFAST_BRUNCH",
  THAI: "THAI",
  JAPANESE: "JAPANESE",
  NOODLES: "NOODLES",
  PIZZA: "PIZZA",
  SEAFOOD: "SEAFOOD",
  VIETNAMESE: "VIETNAMESE",
  CHINESE: "CHINESE",
};

export const CategoryNames = {
  [Categories.BUFFET]: "buffets",
  [Categories.CAFES]: "cafes",
  [Categories.BREAKFAST_BRUNCH]: "breakfast brunch",
  [Categories.THAI]: "thai",
  [Categories.JAPANESE]: "japanese",
  [Categories.NOODLES]: "noodles",
  [Categories.PIZZA]: "pizza",
  [Categories.SEAFOOD]: "seafood",
  [Categories.VIETNAMESE]: "vietnamese",
  [Categories.CHINESE]: "chinese",
}

export type CategoryType = keyof typeof Categories;

// Prompt list
export const PROMPT_LIST = [
  'All I ask is that you',
  'A fact I love is',
  'I discovered that',
  'Give me travel tips for',
  'My best Dad Joke',
  'I\'m the type of texter who',
  'The hallmark of a good relationship is',
  'Two truths and a lie',
  'You should *not* go out with me if',
  'What if I told you that',
  'The key to my heart is',
];

// Profile
export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  job: string;
  photoUrl: string;
  gender: GenderType | null;
  passions: PassionType[];
  city: string;
  country: string;
  distance: number;
  priceMin: number;
  priceMax: number;
  categories: CategoryType[];
  prompt: string;
  promptAnswer: string;
}