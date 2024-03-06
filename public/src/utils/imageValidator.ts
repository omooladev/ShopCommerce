import { MAX_IMAGES_NUMBER, MAX_IMAGE_SIZE, MAX_IMAGE_SIZE_WHOLE_NUMBER } from "../config.js";

export const validateImage = async (imageFiles: FileList | null, type: string) => {
  let fileErrorObject = { hasError: false, errorMessage: "" };
  console.log(imageFiles);
  //----------> If no image was selected
  if (!imageFiles || imageFiles.length === 0) {
    fileErrorObject = { hasError: true, errorMessage: "Please provide product image" };
  } else {
    const totalImages = imageFiles.length;
    //----------> CASE 1
    if (totalImages > MAX_IMAGES_NUMBER) {
      fileErrorObject = {
        hasError: true,
        errorMessage: `The maximum number of images that you can upload is ${MAX_IMAGES_NUMBER}`,
      };
    } else {
      //----------> validate size and type of the images
      for (let index = 0; index < imageFiles.length; index++) {
        let imageFile = imageFiles[index];
        //----------> validate file type
        let fileTypeValidationResult = await validateFileType(imageFile);
        if (fileTypeValidationResult.hasError) {
          fileErrorObject = { hasError: true, errorMessage: fileTypeValidationResult.errorMessage };
          break;
        }
        //----------> validate file size
        let fileSizeValidationResult = await validateFileSize(imageFile);
        if (fileSizeValidationResult.hasError) {
          fileErrorObject = { hasError: true, errorMessage: fileSizeValidationResult.errorMessage };
          break;
        }
      }
    }
  }
  return fileErrorObject;
};
const validateFileType = async (imageFile: File) => {
  if (!imageFile.type.includes("image/")) {
    return { hasError: true, errorMessage: "Please upload an Image" };
  }
  return { hasError: false, errorMessage: "" };
};
const validateFileSize = async (imageFile: File) => {
  const imageSize = imageFile.size;

  //----------> if the size of image to be uploaded is greater then the default size
  if (imageSize > MAX_IMAGE_SIZE) {
    return {
      hasError: true,
      errorMessage: `Please upload an image smaller than ${MAX_IMAGE_SIZE_WHOLE_NUMBER} MB`,
    };
  }
  return { hasError: false, errorMessage: "" };
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
