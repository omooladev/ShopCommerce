const productDetailsValidator = async ({ name, price, description, imageUrl }) => {
  if (!name) {
    return { status: "failed", message: "Please provide a product name" };
  }
  if (!price) {
    return { status: "failed", message: "Please provide a product price" };
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
  return { status: "success" };
};
module.exports = productDetailsValidator;
