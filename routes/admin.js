//----------> import modules
const express = require("express");
const { uploadProductImages } = require("../config/multer");
const {
  viewAddProductPage,
  addProductToList,
  viewAdminProductsPage,
  editProduct,
  deleteProduct,
  viewEditProductPage,
} = require("../controllers/admin");

//----------> router
const router = express.Router();

//----------> view the add product page
router.route("/add-product").get(viewAddProductPage);
//----------> add product
router.post("/add-product", uploadProductImages, addProductToList);

//----------> view all products
router.route("/admin/products").get(viewAdminProductsPage);

//----------> view edit product page
router.route("/edit-product/:productId").get(viewEditProductPage);

//----------> edit product
router.route("/edit-product/:productId").post(editProduct);

//----------> delete product
router.route("/products/delete/:productId").post(deleteProduct);

module.exports = router;
