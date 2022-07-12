import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/product-routes";
require("dotenv").config();

const PORT = process.env.PORT || 3001;

//variable declaration
const app = express();

//mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_CONNECT, { useNewUrlParser: true });

//configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));

routes(app);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});