export interface ImageItem {
  _id: string;
  imageUrl: string;
}

export interface Hero {
  trevelers: number;
  treasures: number;
  cities: number;
}

export interface MostPickedItem {
  _id: string;
  country: string;
  unit: string;
  imageId: ImageItem[];
  title: string;
  price: number;
  city: string;
}

export interface CategoryItem {
  _id: string;
  country: string;
  isPopular: boolean;
  imageId: ImageItem[];
  title: string;
  city: string;
}

export interface Category {
  _id: string;
  name: string;
  itemId: CategoryItem[];
}

export interface Testimonial {
  _id: string;
  imageUrl: string;
  name: string;
  rate: number;
  content: string;
  familyName: string;
  familyOccupation: string;
}

export interface LandingPageData {
  hero: Hero;
  mostPicked: MostPickedItem[];
  category: Category[];
  testimonial: Testimonial;
}

export interface LandingPageResponse extends LandingPageData {} 
