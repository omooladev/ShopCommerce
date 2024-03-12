"use strict";
//<---------- HTML ELEMENTS ---------->
const productImages = document.querySelectorAll(".product-image-container .product-images");
const imageSwitcher = document.querySelectorAll(".image-switcher");
//<---------- HTML BUTTON ELEMENTS ---------->
const prevArrow = document.querySelectorAll(".prev-arrow");
const nextArrow = document.querySelectorAll(".next-arrow");
// const handleImageNavigation = (event, { direction }) => {
//   event.stopPropagation();
//   let targetElement = event.target;
//   let nextArrow;
//   let prevArrow;
//   if (event.target.className.includes("icon")) {
//     targetElement = event.target.parentElement;
//   }
//   if (direction === "next") {
//     nextArrow = targetElement;
//     prevArrow = targetElement.parentElement.children[0];
//   }
//   if (direction === "previous") {
//     nextArrow = targetElement.parentElement.children[1];
//     prevArrow = targetElement;
//   }
//   const productImagesElement = targetElement.parentElement.parentElement;
//   let productImagesArray = targetElement.parentElement.parentElement.children;
//   //----------> we create a new array and remove the first item from the html collection
//   productImagesArray = Array.prototype.slice.call(productImagesArray, 1);
//   //----------> check if the length of the images is only one
//   if (productImagesArray.length === 1) {
//     return;
//   }
//   let imageIndexNumber = Number(productImagesElement.dataset.imageIndexNumber);
//   if (direction === "next" && imageIndexNumber < productImagesArray.length - 1) {
//     imageIndexNumber += 1;
//     productImagesElement.dataset.imageIndexNumber = imageIndexNumber;
//     productImagesArray[imageIndexNumber - 1].classList.remove("active");
//     productImagesArray[imageIndexNumber].classList.add("active");
//     //----------> check if the previous arrow is already disabled
//     if (prevArrow.disabled) {
//       prevArrow.disabled = false;
//     }
//     if (imageIndexNumber === productImagesArray.length - 1) {
//       nextArrow.disabled = true;
//     }
//   }
//   if (direction === "previous" && imageIndexNumber > 0) {
//     imageIndexNumber -= 1;
//     productImagesElement.dataset.imageIndexNumber = imageIndexNumber;
//     productImagesArray[imageIndexNumber + 1].classList.remove("active");
//     productImagesArray[imageIndexNumber].classList.add("active");
//     //----------> check if the next arrow is already disabled
//     if (nextArrow.disabled) {
//       nextArrow.disabled = false;
//     }
//     if (imageIndexNumber === 0) {
//       prevArrow.disabled = true;
//     }
//   }
// };
