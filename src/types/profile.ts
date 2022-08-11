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
  SHOPPING: "SHOPPING",
  KARAOKE: "KARAOKE",
  YOGA: "YOGA",
  COOKING: "COOKING",
  TENNIS: "TENNIS",
  RUN: "RUN",
  SWIMMING: "SWIMMING",
  ART: "ART",
  TRAVELLING: "TRAVELLING",
  EXTREME: "EXTREME",
  MUSIC: "MUSIC",
  DRINK: "DRINK",
  VIDEO_GAMES: "VIDEO_GAMES",
}

export const PassionNames = {
  [Passions.PHOTOGRAPHY]: 'Photography',
  [Passions.SHOPPING]: 'Shopping',
  [Passions.KARAOKE]: 'Karaoke',
  [Passions.YOGA]: 'Yoga',
  [Passions.COOKING]: 'Cooking',
  [Passions.TENNIS]: 'Tennis',
  [Passions.RUN]: 'Run',
  [Passions.SWIMMING]: 'Swimming',
  [Passions.ART]: 'Art',
  [Passions.TRAVELLING]: 'Travelling',
  [Passions.EXTREME]: 'Extreme',
  [Passions.MUSIC]: 'Music',
  [Passions.DRINK]: 'Drink',
  [Passions.VIDEO_GAMES]: 'VideoGames',
}

export type PassionType = keyof typeof Passions;

// Restaurant Categories
export const Categories = {
  BUFFET: "BUFFETS",
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
  [Categories.BREAKFAST_BRUNCH]: "breakfast_brunch",
  [Categories.THAI]: "thai",
  [Categories.JAPANESE]: "japanese",
  [Categories.NOODLES]: "noodles",
  [Categories.PIZZA]: "pizza",
  [Categories.SEAFOOD]: "seafood",
  [Categories.VIETNAMESE]: "vietnamese",
  [Categories.CHINESE]: "chinese",
}

export type CategoryType = keyof typeof Categories;

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