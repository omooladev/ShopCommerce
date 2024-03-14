const { StatusCodes } = require("http-status-codes");
const {
  configurations: { MAX_IMAGE_SIZE_WHOLE_NUMBER },
} = require("../config/app");

const errorHandlerMiddleware = (error, req, res, next) => {
  let customError = {
    message: error.message || "Something went wrong, please try again later",
    statusCode: error.statusCode || 500,
  };
  console.log(error)
  // if (error.code === "LIMIT_FILE_SIZE") {
  //   customError.message = `Please upload a file that is no larger than ${MAX_IMAGE_SIZE_WHOLE_NUMBER}MB`;
  //   customError.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
  // }

  res.status(customError.statusCode).json({ message: customError.message });
  //res.status(customError.statusCode).json({ message: customError.message });
};

module.exports = errorHandlerMiddleware;
