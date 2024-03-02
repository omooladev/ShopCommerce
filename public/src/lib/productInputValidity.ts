import { setFormReply } from "../functions/setFormReply.js";

export const productInputIsValid = (inputValidityName: string) => {
  //----------> dynamically set the validity of that input to true
  productFormIsValid[inputValidityName] = true;
  //----------> save form validity
  //saveFormValidity();

  //----------> reset form reply because the input is valid
  return setFormReply("", "", "reset");
};
export const productInputNotValid = (inputType: string, inputValidityName: string, errorMessage: string) => {
  //----------> dynamically set the validity of that input to false
  if (inputValidityName) {
    //----------> Set the validity of the input to false
    productFormIsValid[inputValidityName] = false;
    //----------> save form validity
    //saveFormValidity();
  }

  //----------> set error message since is it not valid
  return setFormReply(errorMessage, "error");
};
