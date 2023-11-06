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
module.exports = productDetailsValidator;
