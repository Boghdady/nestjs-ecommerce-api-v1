import * as mongoose from 'mongoose';

export const ProductSchame = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  image: String,
  description: String,
  price: Number,
  created: {
    type: Date,
    default: Date.now,
  },
});
