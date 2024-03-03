export type Product = {
  id: number;
  name: string;
  ranking: number;
  delivery_des: string;
  pickup_des: string;
  price: number;
  review_ids: string[];
  description: string;
  similar_product_ids: string[];
  small_number: number;
  medium_number: number;
  large_number: number;
  weights: number[];
};
