import { setFormReply } from "../functions/setFormReply.js";

export const productInputIsValid = (inputValidityName: string) => {
  //----------> dynamically set the validity of that input to true
  if (productFormIsValid[inputValidityName]) {
    return;
  }
  productFormIsValid[inputValidityName] = true;
  console.log(productFormIsValid);
  //----------> save form validity
  //saveFormValidity();

  //----------> reset form reply because the input is valid

  return setFormReply("", "", "reset");
};
export const productInputNotValid = (inputValidityName: string, errorMessage: string) => {
  if (!productFormIsValid[inputValidityName]) {
    return;
  }
  //----------> Set the validity of the input to false
  productFormIsValid[inputValidityName] = false;
  console.log(productFormIsValid);
  //----------> save form validity
  //saveFormValidity();

  //----------> set error message since is it not valid
  return setFormReply(errorMessage, "error");
};
