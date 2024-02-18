export interface Product {
  id: number;
  name: string;
  price: number;
  rank: number;
  review_count: number;
  main_picture: string;
  pictures: string[];
  url: string;
  reviews_url: string;
  description: string;
  brand: string;
  category: string;
  subcategory: string;
}

export interface PostLink {
  url: string;
  title: string;
}
