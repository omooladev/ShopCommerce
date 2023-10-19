import { changeImageHandler } from "../functions/imageHandler.js";
import { setFormReply } from "../functions/setFormReply.js";

const productInputIsValid = ({ inputIsValid }) => {
  //----------> dynamically set the validity of that input to true
  productFormIsValid = {
    ...productFormIsValid,
    [inputIsValid]: true,
  };

  //----------> save form validity
  saveFormValidity();

  //----------> reset form reply because the input is valid
  setFormReply({ replyType: "reset" });
};
const productInputNotValid = ({ inputType, inputIsValid, errorMessage }) => {
  //----------> dynamically set the validity of that input to false
  productFormIsValid = {
    ...productFormIsValid,
    [inputIsValid]: false,
  };

  //----------> save form validity
  saveFormValidity();

  //----------> set error message since is it not valid
  return setFormReply({
    message: errorMessage || `Please provide a product ${inputType.toLowerCase()}`,
    type: "error",
  });
};

//----------> This function is for handling the product name,price, and description field
const changeProductInputHandler = (event, { inputType }) => {
  //----------> get the value of the input field
  const inputValue = event.target.value;

  //----------> set a dynamic name for the input field
  const inputIsValid = `product${inputType}IsValid`;

  //----------> check the length of the input field
  const inputValueLength = inputValue.trim().length;

  //----------> check if input type is description
  if (inputType === "Description") {
    return setProductDescriptionLength(inputValue);
  }

  //----------> check if the input value length is 0
  if (inputValueLength === 0) {
    return productInputNotValid({ inputType, inputIsValid });
  }
  //----------> check if input type is description
  if (inputType === "Price") {
    if (!Number(inputValue)) {
      return productInputNotValid({
        inputType,
        inputIsValid,
        errorMessage: "Product price is invalid",
      });
    }
  }
  return productInputIsValid({ inputIsValid });
};

const setProductDescriptionLength = (productDescriptionValue) => {
  //----------> set the length of the product description in the inner html
  productDescriptionLength.innerHTML = productDescriptionValue.length;

  //----------> check if the length of the description is zero
  if (productDescriptionValue.trim().length === 0) {
    productInputNotValid({
      inputIsValid: "productDescriptionIsValid",
      errorMessage: "Please provide a product description",
    });
  } else {
    //----------> check if the length of the product description value is greater than
    if (productDescriptionValue.trim().length > 500) {
      //----------> configure the styles
      productDescriptionLength.style.color = "red";
      return productInputNotValid({
        inputIsValid: "productDescriptionIsValid",
        errorMessage: "Product description length cannot exceed 500 characters",
      });
    } 
    //----------> configure the styles
    productDescriptionLength.style.color = "black";
    //----------> change the validity to true
    productInputIsValid({ inputIsValid: "productDescriptionIsValid" });
  }
};

//--------> all event listeners
productName.oninput = (event) => changeProductInputHandler(event, { inputType: "Name" });

productPrice.oninput = (event) => changeProductInputHandler(event, { inputType: "Price" });

productDescription.oninput = (event) =>
  changeProductInputHandler(event, { inputType: "Description" });

productImage.onchange = (event) => changeImageHandler(event);
