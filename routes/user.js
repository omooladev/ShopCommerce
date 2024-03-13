//----------> import modules
const express = require("express");

//----------> custom modules
const {
  viewShopPage,
  viewProductDetailsPage,
  getAllCartItems,
  addProductToCart,
  viewCartPage,
  handleCartQuantityChange,
  removeCartItem,
} = require("../controllers/user");

const router = express.Router();

//<---------- ROUTES ---------->
router.get("/", (req, res) => res.redirect("/shop"));

//<---------- VIEW THE SHOP PAGE ---------->
router.get("/shop", viewShopPage);

//<---------- VIEW THE PRODUCT DETAILS PAGE ---------->
router.get("/shop/:productID", viewProductDetailsPage);

//----------> view cart page
router.route("/cart").get(viewCartPage);

//----------> add product to cart with product id as a uri parameter
router.route("/cart/add/:productId").post(addProductToCart);

//----------> get all the cart items
router.route("/cart/items").get(getAllCartItems);

//----------> increase or decrease cart item quantity
router.route("/cart/:cartItemId/:action").post(handleCartQuantityChange);

//----------> remove product from the cart
router.route("/cart/remove/:cartItemId").post(removeCartItem);

module.exports = router;
