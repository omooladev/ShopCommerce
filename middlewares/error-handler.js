const { StatusCodes } = require("http-status-codes");
const {
  serverConfigurations: { MAX_PRODUCT_IMAGES },
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
  console.log(customError);

  res.status(customError.statusCode).json({ message: customError.message });
};

module.exports = errorHandlerMiddleware;
