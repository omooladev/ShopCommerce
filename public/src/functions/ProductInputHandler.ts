import { ValidateProductInput } from "../lib/ProductInputValidator.js";

//<----------A function for handling the product name,price, and description field ---------->
export const changeProductInputHandler = (event: Event, inputType: string) => {
  //----------> access the target element
  const input = event.target as HTMLInputElement;
  let inputValue: string = input.value;
  //----------> check if input type is description
  ValidateProductInput(inputValue, inputType);
};
