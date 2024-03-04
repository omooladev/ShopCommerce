import { productInputIsValid, productInputNotValid } from "./productInputValidity.js";
const PRODUCT_DESCRIPTION_MAX_LENGTH = 500;
//----------> set the product description length to the maximum when page loads
productDescription.maxLength = PRODUCT_DESCRIPTION_MAX_LENGTH;
export const ValidateProductDescription = (value) => {
    let lengthOfValue = value.length;
    //----------> set the length of the product description in the inner html
    productDescriptionLength.innerHTML = lengthOfValue;
    if (lengthOfValue === 0) {
        return productInputNotValid("productDescriptionIsValid", "Please provide a product description");
    }
    if (lengthOfValue > PRODUCT_DESCRIPTION_MAX_LENGTH) {
        // ----------> configure the styles
        productDescriptionLength.style.color = "red";
        return productInputNotValid("productDescriptionIsValid", "Product description length cannot exceed 500 characters");
    }
    if (lengthOfValue > 0 && lengthOfValue <= PRODUCT_DESCRIPTION_MAX_LENGTH) {
        productDescriptionLength.style.color = "black";
        return productInputIsValid("productDescriptionIsValid");
    }
};
