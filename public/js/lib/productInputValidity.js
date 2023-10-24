import { setFormReply } from "../functions/setFormReply.js";

const productInputIsValid = ({ inputValidityName }) => {
  //----------> dynamically set the validity of that input to true
  productFormIsValid[inputValidityName] = true;
  //----------> save form validity
  saveFormValidity();

  //----------> reset form reply because the input is valid
  setFormReply({ replyType: "reset" });
};
const productInputNotValid = ({ inputType, inputValidityName, errorMessage }) => {
  //----------> dynamically set the validity of that input to false
  if (inputValidityName) {
    productFormIsValid[inputValidityName] = false;
    //----------> save form validity
    saveFormValidity();
  }

  //----------> set error message since is it not valid
  return setFormReply({
    message: errorMessage || `Please provide a product ${inputType.toLowerCase()}`,
    type: "error",
  });
};

export { productInputIsValid, productInputNotValid };
