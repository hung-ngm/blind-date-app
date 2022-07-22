import React, { createContext, useState } from 'react'
import { useStore } from '../../stores/store';

export const ProfileContext = createContext<ProfileContextValueType>();

export type Avatar = {
  uri: string;
}

export enum Gender {
  Man = 0,
  Woman,
  Other
};

export const GenderNames = [
  'Man',
  'Woman',
  'Other'
];

// Passion type declaration
export enum Passions {
  Photography = 0,
  Shopping,
  Karaoke,
  Yoga,
  Cooking,
  Tennis,
  Run,
  Swimming,
  Art,
  Travelling,
  Extreme,
  Music,
  Drink,
  VideoGames,
}

export const PassionNames = [
  'Photography',
  'Shopping',
  'Karaoke',
  'Yoga',
  'Cooking',
  'Tennis',
  'Run',
  'Swimming',
  'Art',
  'Travelling',
  'Extreme',
  'Music',
  'Drink',
  'VideoGames',
]

export type Passion = {
  iconName?: string;
  name: string;
  type: Passions;
}

export type SelectedPassionType = {
  [key in Passions]?: boolean;
}

export type selectPassionFuncType = (passionType: Passions) => void;

// Category type declaration
export enum Categories {
  Coffee = 0,
  Desserts,
  Chicken,
  Pizza,
}

export const CategoryNames = [
  'Coffee',
  'Desserts',
  'Chicken',
  'Pizza',
]

export type Category = {
  iconName: string;
  name: string;
  type: Categories;
}

export type SelectedCategoryType = {
  [key in Categories]?: boolean;
}

export type selectCategoryFuncType = (categoryType: Categories) => void;

// Context value type declaration
export type ProfileContextValueType = {
  firstName: string;
  setFirstName: Function;
  lastName: string;
  setLastName: Function;
  job: string;
  setJob: Function;
  birthday: Date | null;
  setBirthday: Function;
  avatar: Avatar | null;
  setAvatar: Function;
  gender: Gender | null;
  setGender: Function;
  selectedPassions: SelectedPassionType,
  selectPassion: selectPassionFuncType;
  numSelectedPassions: number;
  distance: number;
  setDistance: Function;
  minPrice: number;
  setMinPrice: Function;
  maxPrice: number;
  setMaxPrice: Function;
  selectedCategories: SelectedCategoryType;
  selectCategory: selectCategoryFuncType;
  numSelectedCategories: number;
  prompt: string;
  setPrompt: Function;
  promptAnswer: string;
  setPromptAnswer: Function;
  submitProfile: () => Promise<void>;
}

type Props = {
  children: React.ReactNode;
}

export const ProfileProvider = ({ children }: Props) => {
  const { setUser, updateUserProfile } = useStore().userStore;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [job, setJob] = useState('');
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [gender, setGender] = useState<Gender | null>(null);
  const [selectedPassions, setSelectedPassions] = useState<SelectedPassionType>({});
  const [numSelectedPassions, setNumSelectedPassions] = useState(0);
  const [distance, setDistance] = useState(20); // in km
  const [minPrice, setMinPrice] = useState(20); // in USD
  const [maxPrice, setMaxPrice] = useState(100); // in USD
  const [selectedCategories, setSelectedCategories] = useState<SelectedCategoryType>({});
  const [numSelectedCategories, setNumSelectedCategories] = useState(0);
  const [prompt, setPrompt] = useState('');
  const [promptAnswer, setPromptAnswer] = useState('');


  const selectPassion = (passionType: Passions) => {
    if (passionType in selectedPassions) {
      setSelectedPassions((pState) => {
          delete pState[passionType];
          return {...pState};
      })
      setNumSelectedPassions((pNum) => pNum - 1)
    }
    else {
        setSelectedPassions((pState) => {
            return {
                ...pState,
                [passionType]: true,
            }
        })
        setNumSelectedPassions((pNum) => pNum + 1)
    }
  }

  const selectCategory = (type: Categories) => {
    if (type in selectedCategories) {
        setSelectedCategories((pState) => {
            delete pState[type];
            return {...pState};
        })
        setNumSelectedCategories((pNum) => pNum - 1)
    }
    else {
        setSelectedCategories((pState) => {
            return {
                ...pState,
                [type]: true,
            }
        })
        setNumSelectedCategories((pNum) => pNum + 1)
    }
  }

  const submitProfile = async () => {
      // TODO: Add all profile details to firestore and storage
      // updateUserProfile(
      //   job,
      //   prompt,
      //   promptAnswer,
      //   GenderNames[Number(gender)],
      //   selectedPassions,
      //   {
      //     priceMin: minPrice,
      //     priceMax: maxPrice,
      //     categories: selectedCategories,
      //   }
      // )
      console.log("=== Profile submitted ===");
      console.log("First name: ", firstName);
      console.log("Last name: ", lastName);
      console.log("Job: ", job);
      console.log("birthday name: ", birthday?.toDateString());
      console.log("avatar: ", avatar?.uri);
      console.log("gender: ", gender);
      console.log("selectedPassions: ");
      Object.keys(selectedPassions).forEach((passion) => {
        console.log("- ", PassionNames[Number(passion)]);
      })
      console.log("distance: ", distance);
      console.log("minPrice: ", minPrice);
      console.log("maxPrice: ", maxPrice);
      console.log("selectedCategories: ");
      Object.keys(selectedCategories).forEach((category) => {
        console.log("- ", CategoryNames[Number(category)]);
      })
      console.log("prompt: ");
      console.log("- ", prompt, " ", promptAnswer);
  }
  
  const value: ProfileContextValueType = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    job,
    setJob,
    birthday,
    setBirthday,
    avatar,
    setAvatar,
    gender,
    setGender, 
    selectedPassions,
    selectPassion,
    numSelectedPassions,
    distance,
    setDistance,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    selectedCategories,
    selectCategory,
    numSelectedCategories,
    prompt,
    setPrompt,
    promptAnswer,
    setPromptAnswer,
    submitProfile,
  }

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}
