import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/product-routes";
require("dotenv").config();

//variable declaration
const app = express();

//mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_CONNECT, { useNewUrlParser: true });

//configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));

routes(app);

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});