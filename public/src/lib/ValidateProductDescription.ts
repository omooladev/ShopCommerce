import { productInputIsValid, productInputNotValid } from "./productInputValidity.js";

export const ValidateProductDescription = (value: any) => {
  let lengthOfValue = value.length;
  //----------> set the length of the product description in the inner html
  productDescriptionLength.innerHTML = lengthOfValue;
  //----------> check if the length of the description is zero
  if (lengthOfValue === 0) {
    return productInputNotValid("productDescriptionIsValid", "Please provide a product description");
  }

  //----------> check if the length of the product description value is greater than
  if (lengthOfValue > 500) {
    // ----------> configure the styles
    productDescriptionLength.style.color = "red";
    return productInputNotValid(
      "productDescriptionIsValid",
      "Product description length cannot exceed 500 characters"
    );
  }
  //----------> configure the styles
  //productDescriptionLength.style.color = "black";
  //----------> change the validity to true
  // productInputIsValid({ inputValidityName: "productDescriptionIsValid" });

  if (lengthOfValue > 0 && lengthOfValue <= 500) {
    return productInputIsValid("productDescriptionIsValid");
  }
};
