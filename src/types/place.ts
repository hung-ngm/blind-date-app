export interface Place {
  id: number;
  name: string;
  priceLevel: number; // Price level (1-4)
  city: string;
  country: string;
  categories: Array<string>;
  photoUrl: string;
}