import { productInputNotValid } from "../lib/productInputValidity.js";
import { validateImage } from "../utils/imageValidator.js";
import { transformImage } from "../utils/transformImage.js";
//----------> resetting preview image
const resetImagePreview = () => {
  //once we are resetting image preview, we set the validity to false automatically
  productFormIsValid.productImageIsValid = false;
  productImageFiles = [];
  transformedImages = [];

  //----------> get all the preview images
  const previewImages = document.querySelectorAll(".preview_image");

  for (let index = 0; index < previewImages.length; index++) {
    //----------> delete the images
    previewImageContainer.removeChild(previewImages[index]);
  }
};

const changeImageHandler = async (event) => {
  //----------> get the images
  let imageFiles = event.target.files;

  //----------> validate the images
  let validationResult = await validateImage({
    selectedImages: imageFiles,
    validationType: "length",
  });

  if (validationResult.status === "error") {
    return;
  }

  const errorData = { hasError: false, errorMessage: "" };

  for (let index = 0; index < imageFiles.length; index++) {
    let imageFile = imageFiles[index];
    let validationResult = await validateImage({
      validationType: "file-type/size",
      imageFile,
    });

    if (validationResult.status === "error") {
      errorData.errorMessage = validationResult.message;
      errorData.hasError = true;
      break;
    }
  }

  if (errorData.hasError) {
    productInputNotValid({
      inputValidityName: "productImageIsValid",
      errorMessage: errorData.errorMessage,
    });

    return;
  }

  //----------> transform the image
  await transformImage(imageFiles);
};

export { changeImageHandler };
