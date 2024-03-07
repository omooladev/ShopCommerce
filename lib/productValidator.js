const {
  configurations: { MAX_PRODUCT_IMAGES },
} = require("../config/app");
const { unlinkFile } = require("../utils/fileManager");
const productDetailsValidator = async ({ name, price, description, imageUrls }) => {
  if (!name) {
    return { status: "failed", message: "Please provide a product name" };
  }
  if (!price) {
    return { status: "failed", message: "Please provide a product price" };
  }
  if (!Number(price)) {
    return { status: "failed", message: "Product price is invalid" };
  }
  if (!description) {
    return { status: "failed", message: "Please provide a product description" };
  }

  if (description.trim().length > 500) {
    return {
      status: "failed",
      message: "Product description length cannot exceed 500 characters",
    };
  }
  if (imageUrls.length === 0) {
    return {
      status: "failed",
      message: "Please upload at least 1 product image",
    };
  }
  return { status: "success" };
};

// const productImageValidator = async (files) => {
//   let result = await validateImageLength(files);

//   if (result.status === "failed") {
//     return { status: result.status, message: result.message };
//   }
//   // result = await validateImageMimeType(files);
//   // if (result.status === "failed") {
//   //   return { status: result.status, message: result.message };
//   // }
// };
// const validateImageLength = async (files) => {
//   if (files.length === 0) {
//     return { status: "failed", message: "Please upload at least 1 product image" };
//   }
//   if (files.length > MAX_PRODUCT_IMAGES) {
//     const { error } = await unlinkFile(files);
//     if (error) {
//       return {
//         status: "failed",
//         message: `You cannot upload more than ${MAX_PRODUCT_IMAGES} product images`,
//       };
//     }
//   }
//   //return { status: "success", message: "image length validation true" };
// };
// const validateImageMimeType = async (files) => {
//   for (let index = 0; index < files.length; index++) {
//     console.log(files[index].mimetype);
//     if (["image/png", "image/jpg", "image/jpeg"].includes(files[index].mimetype)) {
//     } else {
//     }
//   }
// };
module.exports = { productDetailsValidator };
