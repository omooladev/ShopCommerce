// const mongoose = require("mongoose");
// const Product = require("./product");

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//     },
//     email: {
//       type: String,
//     },
//     cart: {
//       items: [
//         {
//           productId: { type: mongoose.SchemaTypes.ObjectId, ref: "products" },
//           quantity: { type: Number },
//         },
//       ],
//       totalAmount: {
//         type: Number,
//         default: 0,
//       },
//     },
//   },
//   { timestamps: true }
// );

// userSchema.methods.addToCart = function (product) {
//   if (!this.cart.items.length) {
//     this.cart = { items: { productId: product, quantity: 1 }, totalAmount: product.price };
//   } else {
//     //----------> if items is found in the user cart

//     //----------> check if the product id already exist in the cart
//     const productIndex = this.cart.items.findIndex(
//       (item) => item.productId.toString() === product._id.toString()
//     );

//     if (productIndex === -1) {
//       //----------> means if product is not found in cart

//       this.cart.items = [...this.cart.items, { productId: product, quantity: 1 }];
//       this.cart.totalAmount = this.cart.totalAmount + product.price;
//     } else {
//       //----------> means if product is already in cart

//       let item = this.cart.items[productIndex];
//       item.quantity += 1;
//       this.cart.items[productIndex] = item;
//       totalAmount = this.cart.totalAmount + product.price;
//       this.cart = { items: this.cart.items, totalAmount };
//     }
//   }
//   return this.save();
// };

// userSchema.methods.removeCartItem = async function (productId) {
//   //----------> find cart item
//   const cartItem = await Product.findById(productId);

//   //----------> get cart item quantity
//   const cartItemQuantity = this.cart.items.find(
//     (item) => item.productId.toString() == productId.toString()
//   ).quantity;
//   //----------> filter the cart items
//   let filteredCartItems = this.cart.items.filter(
//     (item) => item.productId.toString() != productId.toString()
//   );

//   //----------> update the cart
//   this.cart = {
//     items: filteredCartItems,
//     totalAmount: this.cart.totalAmount - cartItemQuantity * cartItem.price,
//   };

//   //----------> save document
//   return this.save();
// };

// userSchema.methods.handleCartQuantityChange = async function (cartItemId, action) {
//   //----------> find the product
//   const product = await Product.findById(cartItemId)
//   //----------> get the index of the cart item
//   const cartItemIndex = this.cart.items.findIndex(
//     (item) => item.productId.toString() === cartItemId.toString()
//   );
//   //----------> get the cart item
//   let cartItem = this.cart.items[cartItemIndex];

//   if (cartItem.quantity === 1 && action === "decrease") {
//     return;
//   }
//   //----------> update the quantity
//   cartItem.quantity += action === "increase" ? 1 : -1;
//   //----------> update the total amount
//   this.cart.totalAmount =
//     this.cart.totalAmount + (action === "increase" ? product.price : -product.price);

//   return this.save();
// };
// module.exports = mongoose.model("user", userSchema);
