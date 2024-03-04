import { PRODUCT_DESCRIPTION_MAX_LENGTH } from "../config.js";
import { productInputIsValid, productInputNotValid } from "./ProductInputValidity.js";
//----------> set the product description length to the maximum when page loads
productDescription.maxLength = PRODUCT_DESCRIPTION_MAX_LENGTH;
export const ValidateProductInput = (value, type) => {
    let lengthOfValue = value.trim().length;
    const inputValidityName = `product${type}IsValid`;
    if (type === "Name") {
        return ValidateProductName(lengthOfValue, inputValidityName);
    }
    if (type === "Price") {
        return ValidateProductPrice(lengthOfValue, inputValidityName, value);
    }
    if (type === "Description") {
        return ValidateProductDescription(lengthOfValue, inputValidityName);
    }
};
const ValidateProductName = (lengthOfValue, inputValidityName, value) => {
    //----------> check if the input value length is 0
    if (lengthOfValue === 0) {
        return productInputNotValid(inputValidityName, "Please provide a product name");
    }
    //----------> when length is greater than zero
    return productInputIsValid(inputValidityName);
};
const ValidateProductPrice = (lengthOfValue, inputValidityName, value) => {
    //----------> check if the input value length is 0
    if (lengthOfValue === 0) {
        //----------> I use skip to bypass a conditional statement in the productInputNotValid function
        //            Because the default valid state of product price is zero, if you enter another something that
        //            is not a price, we still check the validity first.
        let skip = productFormIsValid[inputValidityName] ? "no" : "yes";
        return productInputNotValid(inputValidityName, "Please provide a product price", skip);
    }
    if (!Number(value)) {
        //----------> when price is not a number
        return productInputNotValid(inputValidityName, "Product");
    }
    //----------> when price is a number and the length is greater than 0
    return productInputIsValid(inputValidityName);
};
const ValidateProductDescription = (lengthOfValue, inputValidityName, value) => {
    //----------> set the length of the product description in the inner html
    productDescriptionLength.innerHTML = lengthOfValue;
    if (lengthOfValue === 0) {
        return productInputNotValid(inputValidityName, "Please provide a product description");
    }
    if (lengthOfValue > PRODUCT_DESCRIPTION_MAX_LENGTH) {
        // ----------> configure the styles
        productDescriptionLength.style.color = "red";
        return productInputNotValid(inputValidityName, "Product description length cannot exceed 500 characters");
    }
    if (lengthOfValue > 0 && lengthOfValue <= PRODUCT_DESCRIPTION_MAX_LENGTH) {
        productDescriptionLength.style.color = "black";
        return productInputIsValid(inputValidityName);
    }
};
