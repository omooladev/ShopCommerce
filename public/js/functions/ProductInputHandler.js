import { ValidateProductDescription } from "../lib/ValidateProductDescription.js";
//<----------A function for handling the product name,price, and description field ---------->
export const changeProductInputHandler = (event, inputType) => {
    //----------> access the target element
    const input = event.target;
    //----------> declare variables
    let inputValue = input.value;
    //   let inputValueLength: string | number = inputValue.trim().length;
    //----------> set a dynamic name for the input field
    const inputValidityName = `product${inputType}IsValid`;
    //----------> check if input type is description
    if (inputType === "Description") {
        return ValidateProductDescription(inputValue.trim());
    }
    //----------> check if the input value length is 0
    //   if (inputValueLength === 0) {
    //     return productInputNotValid({ inputType, inputValidityName });
    //   }
    //----------> check if input type is description
    //   if (inputType === "Price") {
    //     if (!Number(inputValue)) {
    //       return productInputNotValid({
    //         inputType,
    //         inputValidityName,
    //         errorMessage: "Product price is invalid",
    //       });
    //     }
    //   }
    //   return productInputIsValid({ inputValidityName });
};
