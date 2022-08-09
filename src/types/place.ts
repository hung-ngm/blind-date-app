export interface Place {
  id: string;
  name: string;
  photoUrl: string;
  categories: Array<string>;
  priceLevel: number; // Price level (1-4)
  address: string;
  city: string;
  country: string;
  phoneNumber: string;
}