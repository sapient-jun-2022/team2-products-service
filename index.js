import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/product-routes";

//variable declaration
const app = express();
const PORT = 3002;

//mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/sap_db", { useNewUrlParser: true });

//configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));

routes(app);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});