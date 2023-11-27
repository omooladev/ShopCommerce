import { changeImageHandler } from "../functions/imageHandler.js";
import { productInputIsValid, productInputNotValid } from "../lib/productInputValidity.js";

//----------> This function is for handling the product name,price, and description field
const changeProductInputHandler = (event, { inputType }) => {
  //----------> get the value of the input field
  const inputValue = event.target.value;

  //----------> set a dynamic name for the input field
  const inputValidityName = `product${inputType}IsValid`;

  //----------> check the length of the input field
  const inputValueLength = inputValue.trim().length;

  //----------> check if input type is description
  if (inputType === "Description") {
    return setProductDescriptionLength(inputValue);
  }

  //----------> check if the input value length is 0
  if (inputValueLength === 0) {
    return productInputNotValid({ inputType, inputValidityName });
  }
  //----------> check if input type is description
  if (inputType === "Price") {
    if (!Number(inputValue)) {
      return productInputNotValid({
        inputType,
        inputValidityName,
        errorMessage: "Product price is invalid",
      });
    }
  }
  return productInputIsValid({ inputValidityName });
};

const setProductDescriptionLength = (productDescriptionValue) => {
  //----------> set the length of the product description in the inner html
  productDescriptionLength.innerHTML = productDescriptionValue.length;

  //----------> check if the length of the description is zero
  if (productDescriptionValue.trim().length === 0) {
    productInputNotValid({
      inputValidityName: "productDescriptionIsValid",
      errorMessage: "Please provide a product description",
    });
  } else {
    //----------> check if the length of the product description value is greater than
    if (productDescriptionValue.trim().length > 500) {
      //----------> configure the styles
      productDescriptionLength.style.color = "red";
      return productInputNotValid({
        inputValidityName: "productDescriptionIsValid",
        errorMessage: "Product description length cannot exceed 500 characters",
      });
    }
    //----------> configure the styles
    productDescriptionLength.style.color = "black";
    //----------> change the validity to true
    productInputIsValid({ inputValidityName: "productDescriptionIsValid" });
  }
};

//--------> all event listeners
productName.oninput = (event) => changeProductInputHandler(event, { inputType: "Name" });

productPrice.oninput = (event) => changeProductInputHandler(event, { inputType: "Price" });

productDescription.oninput = (event) =>
  changeProductInputHandler(event, { inputType: "Description" });

productImage.onchange = (event) => changeImageHandler(event);
