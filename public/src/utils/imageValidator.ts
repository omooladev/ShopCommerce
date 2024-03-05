import { MAX_IMAGES_NUMBER, MAX_IMAGE_SIZE, MAX_IMAGE_SIZE_WHOLE_NUMBER } from "../config.js";
import { productInputIsValid, productInputNotValid } from "../lib/ProductInputValidity.js";

export const validateImage = async (imageFiles: FileList | null, type: string) => {
  const inputValidityName: string = `product${type}IsValid`;
  //----------> If no image was selected
  if (!imageFiles) {
    return productInputNotValid(inputValidityName, "Please provide product image", "yes");
  }
  const totalImages: number = imageFiles.length;
  let hasError: boolean = true;
  //----------> CASE 1
  if (totalImages > MAX_IMAGES_NUMBER) {
    productInputNotValid(
      inputValidityName,
      `The maximum number of images that you can upload is ${MAX_IMAGES_NUMBER}`,
      "yes"
    );
  }
  //----------> validate size and type of the images

  for (let index = 0; index < imageFiles.length; index++) {
    let imageFile = imageFiles[index];
    //----------> validate file type
    let fileTypeValidationResult = await validateFileType("file-type", imageFile, inputValidityName);
    if (fileTypeValidationResult.hasError) {
      hasError = true;
      break;
    }
    //----------> validate file size
    let fileSizeValidationResult = await validateFileSize("file-size", imageFile, inputValidityName);
    if (fileSizeValidationResult.hasError) {
      hasError = true;
      break;
    }
  }

  //----------> check if error existed
  if (hasError) {
    return { hasError };
  } else {
    return { hasError };
  }
};
const validateFileType = async (action: string, imageFile: File, inputValidityName: string) => {
  if (!imageFile.type.includes("image/")) {
    productInputNotValid(
      inputValidityName,
      "Please upload an image",
      "yes"
      //inputValidityName: productImageFiles.length === 0 && "productImageIsValid",
    );
    return { hasError: true };
  }
  return { hasError: false };
};
const validateFileSize = async (action: string, imageFile: File, inputValidityName: string) => {
  const imageSize = imageFile.size;

  //----------> if the size of image to be uploaded is greater then the default size
  if (imageSize > MAX_IMAGE_SIZE) {
    productInputNotValid(
      inputValidityName,
      `Please upload an image smaller than ${MAX_IMAGE_SIZE_WHOLE_NUMBER} MB`,
      "yes"
      //inputValidityName: productImageFiles.length === 0 && "productImageIsValid",
    );
    return { hasError: true };
  }
  return { hasError: false };
};

//     //----------> find the sum of the length of the images already uploaded and the selected images
//     const totalImagesToUpload = productImageFiles.length + selectedImages.length;

//     //----------> CASE 3
//     if (totalImagesToUpload > MAX_IMAGES_NUMBER) {
//       productInputNotValid({
//         errorMessage: `Please upload ${MAX_IMAGES_NUMBER - productImageFiles.length} more images`,
//       });
//       return { hasError: true };
//     }

// CASE 1:-
//    we check if the total images selected to
//    be uploaded is greater than the maximum image you can upload

// CASE 2:-
//    we check if the total images already uploaded is equal to the
//    maximum image you can upload

// CASE 3:-
//    This helps us to know how many more images is needed to equal the maximum image number
//    we first add the total images already uploaded to the current images selected to be uploaded

//     //----------> CASE 2
//     if (productImageFiles.length === MAX_IMAGES_NUMBER) {
//       productInputNotValid({
//         errorMessage: `The maximum number of images that you can upload is ${MAX_IMAGES_NUMBER}`,
//       });
//       return { hasError: true };
//     }
