import { productInputIsValid, productInputNotValid } from "../lib/ProductInputValidity.js";
import { validateImage } from "../utils/imageValidator.js";

export const changeImageHandler = async (event: Event, inputType: string) => {
  //----------> get the images
  let imageElement = event.target as HTMLInputElement;
  let imageFiles: FileList | null = imageElement.files;
  const inputValidityName: string = `product${inputType}IsValid`;
  //----------> validate the image files

  let validationResult = await validateImage(imageFiles, inputType);
  console.log(validationResult);
  if (validationResult.hasError) {
    //inputValidityName: productImageFiles.length === 0 && "productImageIsValid",
    return productInputNotValid(inputValidityName, validationResult.errorMessage, "yes");
  }
  return productInputIsValid(inputValidityName);

  // if (validationResult.hasError) {
  //   return;
  // }

  //----------> transform the image
  //await transformImage(imageFiles);
};
