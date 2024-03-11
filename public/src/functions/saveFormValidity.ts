export const saveFormValidity = (action?: string) => {
  if (action === "form-reset") {
    (productFormIsValid.productNameIsValid = false),
      (productFormIsValid.productPriceIsValid = false),
      (productFormIsValid.productDescriptionIsValid = false),
      (productFormIsValid.productImageIsValid = false);
  }

  //----------> get all input validity
  const { productNameIsValid, productPriceIsValid, productDescriptionIsValid, productImageIsValid } =
    productFormIsValid;
  //----------> check form validity
  const formIsValid = true; //todo remove this later
  // const formIsValid =
  //   productNameIsValid && productPriceIsValid && productDescriptionIsValid && productImageIsValid;
  //----------> if form is not valid, disable the form button
  if (!formIsValid) {
    productFormButton.disabled = true;
    return;
  }
  //----------> enable the form button
  productFormButton.disabled = false;
};
