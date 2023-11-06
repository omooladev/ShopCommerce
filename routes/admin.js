//----------> import modules
const express = require("express");

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

//----------> add product

router.route("/add-product").get(viewAddProductPage).post(addProductToList);

//----------> view all products
router.route("/products").get(viewAdminProductsPage);

//----------> view edit product page
router.route("/edit-product/:productId").get(viewEditProductPage);

//----------> edit product
router.route("/edit-product/:productId").post(editProduct);

//----------> delete product
router.route("/products/delete/:productId").post(deleteProduct);

module.exports = router;
