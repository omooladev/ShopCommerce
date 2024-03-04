import { ValidateProductInput } from "../lib/productInputValidator.js";

//<----------A function for handling the product name,price, and description field ---------->
export const changeProductInputHandler = (event: Event, inputType: string) => {
  //----------> access the target element
  const input = event.target as HTMLInputElement;
  let inputValue: string = input.value;
  //----------> check if input type is description
  ValidateProductInput(inputValue, inputType);
};
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
