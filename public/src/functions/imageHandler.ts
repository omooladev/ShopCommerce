import { productInputIsValid, productInputNotValid } from "../lib/ProductInputValidity.js";
import { validateImage } from "../utils/imageValidator.js";
import { TransformImage } from "../utils/TransformImage.js";

export const changeImageHandler = async (event: Event, inputType: string) => {
  //----------> get the images
  let imageElement = event.target as HTMLInputElement;
  let imageFiles = imageElement.files;
  const inputValidityName = `product${inputType}IsValid`;
  //----------> validate the image files

  let validationResult = await validateImage(imageFiles, inputType);
  if (validationResult.hasError) {
    //inputValidityName: productImageFiles.length === 0 && "productImageIsValid",
    return productInputNotValid(inputValidityName, validationResult.errorMessage, "yes");
  }
  productInputIsValid(inputValidityName);
  //----------> transform the image
  await TransformImage(imageFiles, inputValidityName);
};
