export type Product = {
  id: number;
  name: string;
  ranking: number;
  delivery_des: string;
  price: number;
  review_ids: string[];
  description: string;
  similar_product_ids: string[];
  small_number: number;
  medium_number: number;
  large_number: number;
  image_src: string;
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
  id_user: number;
  created_at: string;
  account: string;
  password: string;
  phone_number: string;
  email_address: string;
  full_name: string;
  addresses: string[];
  payment_info: string;
};

export type Bill = {
  id: string;
  created_at: string;
  id_user: number;
  id_products: number[];
  total_price: number;
  product_prices: number[];
};

export type UserInformation = {
  id: string;
  id_user: string;
  email: string;
  phone_number: string;
  address: string;
  full_name: string;
};

export type PaymentInformation = {
  id: string;
  id_user: string;
  created_at: string;
  full_name: string;
  card_number: string;
  expiration_date: string;
  cvv: string;
};

export type OmitTwo<T, K1 extends keyof T, K2 extends keyof T> = Omit<
  Omit<T, K1>,
  K2
>;
