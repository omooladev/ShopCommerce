import { ValidateProductInput } from "../lib/ProductInputValidator.js";
//<----------A function for handling the product name,price, and description field ---------->
export const changeProductInputHandler = (event, inputType) => {
    //----------> access the target element
    const input = event.target;
    let inputValue = input.value;
    //----------> validate the input
    ValidateProductInput(inputValue, inputType);
};
