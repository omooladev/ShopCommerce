//----------> import modules
const express = require("express");

//----------> custom modules
const {
  viewShopPage,
  getAllCartItems,
  addProductToCart,
  viewCartPage,
  handleCartQuantityChange,
  removeCartItem,
} = require("../controllers/user");

const router = express.Router();

//----------> redirect to the shop page
router.get("/", (req, res) => res.redirect("/shop"));

//----------> view shop page
router.get("/shop", viewShopPage);

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
