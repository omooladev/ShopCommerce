const { StatusCodes } = require("http-status-codes");
const {
  serverConfigurations: { MAX_PRODUCT_IMAGES, MAX_IMAGE_SIZE_WHOLE_NUMBER },
} = require("../config/server");

const errorHandlerMiddleware = (error, req, res, next) => {
  let customError = {
    message: error.message || "Something went wrong, please try again later",
    statusCode: error.statusCode || 500,
  };
  console.log(error);
  console.log(customError);

  res.status(customError.statusCode).json({ message: customError.message });
};

module.exports = errorHandlerMiddleware;
