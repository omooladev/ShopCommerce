import { productInputIsValid, productInputNotValid } from "./productInputValidity.js";
export const ValidateProductDescription = (value) => {
    //----------> set the length of the product description in the inner html
    productDescriptionLength.innerHTML = value.length;
    //----------> check if the length of the description is zero
    if (value.length === 0) {
        return productInputNotValid("Description", "productDescriptionIsValid", "Please provide a product description");
    }
    if (value.length > 0) {
        return productInputIsValid("Description");
    }
    //   else {
    //   ----------> check if the length of the product description value is greater than
    //       if (productDescriptionValue.trim().length > 500) {
    //    ----------> configure the styles
    //         productDescriptionLength.style.color = "red";
    //         return productInputNotValid({
    //           inputValidityName: "productDescriptionIsValid",
    //           errorMessage: "Product description length cannot exceed 500 characters",
    //         });
    //       }
    //     //----------> configure the styles
    //     productDescriptionLength.style.color = "black";
    //     //----------> change the validity to true
    //     productInputIsValid({ inputValidityName: "productDescriptionIsValid" });
    //   }
};
