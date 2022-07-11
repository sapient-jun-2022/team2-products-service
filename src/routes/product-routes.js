import {
    getProductByID,
    getAllProducts,
    home
  } from "../controller/product-controller";
  
  const routes = (app) => {
    app.route("/").get(home);
  
    app
      .route("/products")
      .get(getAllProducts)
  
    app
      .route("/products/:productID")
      .get(getProductByID)
  };
  
  export default routes;