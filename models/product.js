const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide product name"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
    },
    description: {
      type: String,
      required: [true, "Please provide product description"],
    },
    imageUrls: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
