//<----------A function for handling the product name,price, and description field ---------->
export const changeProductInputHandler = (event: Event, inputType: string) => {
  console.log("aza");
  //----------> get the value of the input field
  // const inputValue = event.target.value;
  //----------> set a dynamic name for the input field
  //const inputValidityName = `product${inputType}IsValid`;
  //----------> check the length of the input field
  //const inputValueLength = inputValue.trim().length;
  //----------> check if input type is description
  //   if (inputType === "Description") {
  //     return setProductDescriptionLength(inputValue);
  //   }
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
