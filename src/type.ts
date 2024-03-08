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
export type Discount_Product = {
  id: number;
  from: string;
  product_price: number;
  discount: number;
  to: string;
};
export type Review = {
  id: number;
  id_user: number;
  user_name: string;
  review_content: string;
  stars: number;
};

export type User = {
  id: number;
  created_at: string;
  account: string;
  password: string;
  phone_number: string;
  email_address: string;
  full_name: string;
  addresses: string[];
  payment_info: string;
}