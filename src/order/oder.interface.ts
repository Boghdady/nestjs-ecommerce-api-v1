import { Document } from 'mongoose';
import { User } from '../user/user.interface';
import { Product } from '../product/product.interface';

export interface Order extends Document {
  owner: User;
  products: ProductsList[];
  totalPrice: number;
  created: Date;
}

export interface ProductsList {
  product: Product;
  quantity: number;
}
