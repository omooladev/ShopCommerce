export const saveFormValidity = () => {
    //----------> get all input validity
    const { productNameIsValid, productPriceIsValid, productDescriptionIsValid, productImageIsValid } = productFormIsValid;
    //----------> check form validity
    const formIsValid = productNameIsValid && productPriceIsValid && productDescriptionIsValid && productImageIsValid;
    //----------> if form is not valid, disable the form button
    if (!formIsValid) {
        productFormButton.disabled = true;
        return;
    }
    //----------> enable the form button
    productFormButton.disabled = false;
};
