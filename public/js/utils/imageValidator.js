import { productInputNotValid } from "../lib/productInputValidity.js";

//----------> Default Image Size and number of images that can be accepted
const MAX_IMAGE_SIZE = 1024 * 1024 * 5; //? This is 2MB
const MAX_IMAGE_SIZE_NUMBER = 4;

//----------> validate images
const validateImage = async ({ imageFiles, imageFile, validationType }) => {
  if (validationType === "length") {
    if (imageFiles.length > 4) {
      productInputNotValid({
        inputValidityName: "productImageIsValid",
        errorMessage: "The maximum number of images that you can upload is 4",
      });
      return { status: "error" };
    }
    return { status: "success" };
  }
  if (validationType === "file-type/size") {
    //----------> if file type is not an image
    if (!imageFile.type.includes("image/")) {
      return { status: "error", message: "Please upload an image" };
    }
    //----------> check the size of the image file
    const imageSize = imageFile.size;
    //----------> if the size of image to be uploaded is greater then the default size
    if (imageSize > MAX_IMAGE_SIZE) {
      return {
        status: "error",
        message: `Please upload a picture smaller than ${MAX_IMAGE_SIZE_NUMBER}MB`,
      };
    }
    return { status: "success" };
  }
};

export { validateImage };
