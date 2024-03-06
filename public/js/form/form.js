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
// productFormButton.disabled = false;//todo----> come back to this
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
//----------> submit form handler
// const submitFormHandler = async (event) => {
//   event.preventDefault();
//   //----------> disable form button
//   productFormButton.disabled = true;
//   //----------> reset reply when the form is submitted
//   setFormReply({ replyType: "reset" });
//   //----------> create form data
//   const formData = new FormData();
//   //----------> assign a variable for the new product and
//   let newProduct = {
//     name: productName.value,
//     price: productPrice.value,
//     description: productDescription.value,
//     images: productImageFiles,
//   };
//   for (const key in newProduct) {
//     if (key === "images") {
//       newProduct[key].forEach((image) => {
//         formData.append("images", image);
//       });
//     } else {
//       formData.append(key, newProduct[key]);
//     }
//   }
//   const isEditing = productForm.className.includes("isEditing");
//   const pageLocation = isEditing && window.location.href.split("/");
//   const productId = pageLocation && pageLocation[pageLocation.length - 1];
//   try {
//     const { data } = await axios.post(
//       `/admin${isEditing ? `/edit-product/${productId}` : "/add-product"}`,
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     if (data.status === "success") {
//       setFormReply({
//         message: isEditing ? "Product edited successfully" : "Product item added successfully",
//         type: "success",
//       });
//       // setTimeout(() => {
//       //   console.log("reset form here");
//       //   //resetForm();
//       //   if (data.message === "Product has been edited successfully") {
//       //     //window.location.href = "/admin/products";
//       //   }
//       // }, 2000);
//     }
//   } catch (error) {
//     formatError(error, (errorMessage) => {
//       setFormReply({
//         message: errorMessage,
//         type: "error",
//       });
//     });
//   }
//   productFormButton.disabled = false;
// };
//----------> configure form reply
// const setFormReply = ({ message, type, replyType }) => {
//   if (replyType === "reset") {
//     return resetFormReply();
//   }
//   productFormReply.innerHTML = message;
//   productFormReply.classList.add(`${type}`);
// };
//----------> reset form reply
// const resetFormReply = () => {
//   productFormReply.innerHTML = "";
//   productFormReply.classList.remove("error");
//   productFormReply.classList.remove("success");
// };
// const formatError = (error, cb) => {
//   const errorMessage = error.response ? error.response.data.message : error.message;
//   return cb(errorMessage);
// };
// const resetForm = () => {
//   productName.value =
//     productPrice.value =
//     productImage.value =
//     productDescription.value =
//     productImageFile =
//     transformedImage =
//       "";
//   productDescriptionLength.innerHTML = "0";
//   productImagePreview.src = productImagePreview.alt = "";
//   productFormInputIsValid = {
//     productNameIsValid: false,
//     productPriceIsValid: false,
//     productDescriptionIsValid: false,
//     productImageIsValid: false,
//   };
//   saveFormValidity();
//   resetFormReply();
// };
//----------> listen to submit event for the form
// productForm.onsubmit = (event: Event) => submitFormHandler(event);
