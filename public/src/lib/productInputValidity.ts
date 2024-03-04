import { setFormReply } from "../functions/setFormReply.js";

export const productInputIsValid = (inputValidityName: string) => {
  //----------> If the input is already valid, don't validate it again
  if (productFormIsValid[inputValidityName]) {
    return;
  }
  console.log("is valid");
  //----------> dynamically set the validity of that input to true
  productFormIsValid[inputValidityName] = true;
  //----------> save form validity
  //saveFormValidity();

  //----------> reset form reply because the input is valid

  return setFormReply("", "", "reset");
};
export const productInputNotValid = (inputValidityName: string, errorMessage: string) => {
  //----------> If Input is not valid, do not run the validator again
  if (!productFormIsValid[inputValidityName]) {
    return;
  }
  console.log("not valid");
  //----------> dynamically set the validity of that input to false
  productFormIsValid[inputValidityName] = false;
  //----------> save form validity
  //saveFormValidity();

  //----------> set error message since is it not valid
  return setFormReply(errorMessage, "error");
};
