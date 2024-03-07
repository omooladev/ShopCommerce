import { productInputIsValid, productInputNotValid } from "../lib/ProductInputValidity.js";
import { validateImage } from "../utils/imageValidator.js";
import { TransformImage } from "../utils/TransformImage.js";

export const changeImageHandler = async (event: Event, inputType: string) => {
  //----------> get the images
  let imageElement = event.target as HTMLInputElement;
  let imageFiles = imageElement.files;
  let inputValidityName = `product${inputType}IsValid`;
  //----------> validate the image files

  //let validationResult = await validateImage(imageFiles, inputType);
  let validationResult = { hasError: false, errorMessage: "" }; //todo remove this line of code as it turns off the validation
  if (validationResult.hasError) {
    if (productImageFiles.length === 0) {
      return productInputNotValid(inputValidityName, validationResult.errorMessage, "yes");
    }
    //---------->This means that if we already have some images to be uploaded, then only want you to see the error message but still keep the state of the image as valid
    return productInputNotValid("", validationResult.errorMessage, "yes"); //----------> we do not supply validity name because we do not want the validity of the image to change
  }
  //productInputIsValid(inputValidityName);//todo uncomment this too
  //----------> transform the image
  await TransformImage(imageFiles, inputValidityName);
};
