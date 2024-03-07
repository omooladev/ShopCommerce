"use strict";
//imp<---------- HTML FORM ---------->
const productForm = document.querySelector(".product_form");
//imp<---------- HTML ELEMENT ---------->
const productFormReply = document.querySelector(".form_reply");
const productDescriptionLength = document.querySelector("#product_description_length");
const previewImageContainer = document.querySelector(".preview_image_container");
const filePicker = document.querySelector(".product_image_choose");
//imp<---------- HTML BUTTON ELEMENT ---------->
const productFormButton = document.querySelector(".product_form button");
//imp<---------- HTML INPUT ELEMENT ---------->
const productName = document.querySelector("#product_name");
const productPrice = document.querySelector("#product_price");
const productDescription = document.querySelector("#product_description");
const productImage = document.querySelector("#product_image");
const productImagePreview = document.querySelector(".preview_image");
//----------> make the button disabled
productFormButton.disabled = false; //todo----> remove this as it makes the validation of our application invalid
//---------->Declare Variables
let productImageFiles = [];
let transformedImages = [];
//----------> default validity
let productFormIsValid = {
    productNameIsValid: productName.value ? true : false,
    productPriceIsValid: productName.value ? true : false,
    productDescriptionIsValid: productName.value ? true : false,
    productImageIsValid: previewImageContainer.children.length > 0 ? true : false,
};
