export interface Place {
  id: number;
  name: string;
  priceMin: number;
  priceMax: number;
  city: string;
  country: string;
  categories: Array<string>;
  photoUrl: string;
}