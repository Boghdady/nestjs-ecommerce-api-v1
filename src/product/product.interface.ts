import { Document } from 'mongoose';
import { User } from 'src/user/user.interface';

export interface Product extends Document {
  owner: User;
  image: string;
  title: string;
  description: string;
  price: number;
  createdDate: Date;
}
