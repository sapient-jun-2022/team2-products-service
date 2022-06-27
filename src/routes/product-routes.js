import {
    getProductByID,
    getAllProducts,
    home
  } from "../controller/product-controller";
  
  const routes = (app) => {
    app.route("/").get(home);
  
    app
      .route("/product")
      .get(getAllProducts)
  
    app
      .route("/product/:productID")
      .get(getProductByID)
  };
  
  export default routes;