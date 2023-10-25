import { productInputNotValid } from "../lib/productInputValidity.js";

//----------> Default Image Size and number of images that can be accepted
const MAX_IMAGE_SIZE = 1024 * 1024 * 2; //? This is 2MB-----> currently at 5mb
const MAX_IMAGE_SIZE_WHOLE_NUMBER = MAX_IMAGE_SIZE.toString().slice(0, 1);
const MAX_IMAGES_NUMBER = 4;

//----------> validate images
const validateImage = async ({ selectedImages, imageFile, validationType }) => {
  if (validationType === "length") {
    //----------> find the sum of the length of the images already uploaded and the selected images
    const totalImagesToUpload = productImageFiles.length + selectedImages.length;

    //----------> CASE 1
    if (selectedImages.length > MAX_IMAGES_NUMBER) {
      productInputNotValid({
        inputValidityName: "productImageIsValid",
        errorMessage: `The maximum number of images that you can upload is ${MAX_IMAGES_NUMBER}`,
      });
      return { hasError: true };
    }
    //----------> CASE 2
    if (productImageFiles.length === MAX_IMAGES_NUMBER) {
      productInputNotValid({
        errorMessage: `The maximum number of images that you can upload is ${MAX_IMAGES_NUMBER}`,
      });
      return { hasError: true };
    }
    //----------> CASE 3
    if (totalImagesToUpload > MAX_IMAGES_NUMBER) {
      productInputNotValid({
        errorMessage: `Please upload ${MAX_IMAGES_NUMBER - productImageFiles.length} more images`,
      });
      return { hasError: true };
    }

    return { hasError: false };
  }
  if (validationType === "file-type/size") {
    let validationResult = validateImageType(imageFile) && validateImageSize(imageFile);

    if (!validationResult) {
      return {
        hasError: true,
      };
    }

    return {
      hasError: false,
    };
  }
};

const validateImageType = (imageFile) => {
  if (!imageFile.type.includes("image/")) {
    productInputNotValid({
      inputValidityName: productImageFiles.length === 0 && "productImageIsValid",
      errorMessage: "Please upload an image",
    });
    return false;
  }
  return true;
};
const validateImageSize = (imageFile) => {
  //----------> check the size of the image
  const imageSize = imageFile.size;

  //----------> if the size of image to be uploaded is greater then the default size
  if (imageSize > MAX_IMAGE_SIZE) {
    productInputNotValid({
      inputValidityName: productImageFiles.length === 0 && "productImageIsValid",
      errorMessage: `Please upload a picture smaller than ${MAX_IMAGE_SIZE_WHOLE_NUMBER} MB`,
    });
    return false;
  }
  return true;
};

export { validateImage };

// CASE 1:-
//    we check if the total images selected to
//    be uploaded is greater than the maximum image you can upload

// CASE 2:-
//    we check if the total images already uploaded is equal to the
//    maximum image you can upload

// CASE 3:-
//    This helps us to know how many more images is needed to equal the maximum image number
//    we first add the total images already uploaded to the current images selected to be uploaded
