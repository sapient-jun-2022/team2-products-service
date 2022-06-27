import mongoose from "mongoose";
import { ProductsSchema } from "../models/product-model";

const Product = mongoose.model("Product", ProductsSchema);

// get all products
export const getAllProducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.send(err);
    }
    console.log("get all products", products);
    res.json(products);
  });
};

// get product by id
export const getProductByID = (req, res) => {
  Product.findById(req.params.productID, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
};

export const home = (req, res) => {
  res.json({ message: "Welcome from Express", appName: "BetterMart" });
};