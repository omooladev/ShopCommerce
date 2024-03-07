//----------> modifiers
declare const axios: any;
//imp<---------- HTML FORM ---------->
const productForm = document.querySelector(".product_form") as HTMLFormElement;
//imp<---------- HTML ELEMENT ---------->
const productFormReply = document.querySelector(".form_reply") as HTMLElement;
const productDescriptionLength = document.querySelector("#product_description_length") as HTMLElement;
const previewImageContainer = document.querySelector(".preview_image_container") as HTMLElement;
const filePicker = document.querySelector(".product_image_choose") as HTMLElement;

//imp<---------- HTML BUTTON ELEMENT ---------->
const productFormButton = document.querySelector(".product_form button") as HTMLButtonElement;
//imp<---------- HTML INPUT ELEMENT ---------->
const productName = document.querySelector("#product_name") as HTMLInputElement;
const productPrice = document.querySelector("#product_price") as HTMLInputElement;
const productDescription = document.querySelector("#product_description") as HTMLInputElement;
const productImage = document.querySelector("#product_image") as HTMLInputElement;
const productImagePreview = document.querySelector(".preview_image");

//----------> make the button disabled
productFormButton.disabled = false; //todo----> remove this as it makes the validation of our application invalid
//---------->Declare Variables
let productImageFiles: File[] = [];
let transformedImages: { imageId: string }[] = [];

//<---------- INTERFACES ---------->I would have this here here but turns out you cannot import a moduke
interface ProductFormValidity {
  [key: string]: boolean;
}

//----------> default validity
let productFormIsValid: ProductFormValidity = {
  productNameIsValid: productName.value ? true : false,
  productPriceIsValid: productName.value ? true : false,
  productDescriptionIsValid: productName.value ? true : false,
  productImageIsValid: previewImageContainer.children.length > 0 ? true : false,
};
