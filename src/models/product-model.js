import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductsSchema = new Schema({
  title: {
    type: String,
    required: `Please enter product title`,
  },
  category: {
    type: String,
    required: `Please enter product category`,
  },
  quantity: {
    type: Number,
    required: `Please enter product quantity`,
  },
  price: {
    type: Number,
    required: `Please enter product price`,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});