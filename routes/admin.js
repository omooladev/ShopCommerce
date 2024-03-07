//<---------- import modules ---------->
const express = require("express");
//<---------- import custom modules ----------->
const { uploadProductImages } = require("../config/multer");
const {
  viewAddProductPage,
  addProductToList,
  viewAdminProductsPage,
  editProduct,
  deleteProduct,
  viewEditProductPage,
} = require("../controllers/admin");

//<---------- router ---------->
const router = express.Router();

//<---------- VIEW ADD PRODUCT PAGE ---------->
router.route("/add-product").get(viewAddProductPage);

//<---------- ADD PRODUCT ROUTE ---------->
router.post("/add-product", uploadProductImages, addProductToList);
// router.post("/add-product", uploadProductImages, addProductToList);

//<---------- VIEW ADMIN PRODUCTS PAGE
router.route("/admin/products").get(viewAdminProductsPage);

//----------> view edit product page
router.route("/edit-product/:productId").get(viewEditProductPage);

//----------> edit product
router.route("/edit-product/:productId").post(editProduct);

//----------> delete product
router.route("/products/delete/:productId").post(deleteProduct);

module.exports = router;
