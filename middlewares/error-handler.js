const { StatusCodes } = require("http-status-codes");
const {
  serverConfigurations: { MAX_PRODUCT_IMAGES, MAX_IMAGE_SIZE_WHOLE_NUMBER },
} = require("../config/server");

const errorHandlerMiddleware = (error, req, res, next) => {
  let customError = {
    message: error.message || "Something went wrong, please try again later",
    statusCode: error.statusCode || 500,
  };
  if (error.code === "LIMIT_UNEXPECTED_FILE") {
    customError.message = `You cannot upload more than ${MAX_PRODUCT_IMAGES} product images`;
    customError.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
  }
  if (error.code === "LIMIT_FILE_SIZE") {
    customError.message = `Please upload an image smaller than ${MAX_IMAGE_SIZE_WHOLE_NUMBER} MB`;
    customError.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
  }
  console.log(error);
  console.log(customError);

  res.status(customError.statusCode).json({ message: customError.message });
};

module.exports = errorHandlerMiddleware;
