import { toggleHoverImage } from "./functions/toggleHoverImage.js";
//<---------- EVENT LISTENERS ON THE SHOP PAGE ---------->
//----------> Loop through the product images and add an event listener to them
productImages.forEach((productImages) => {
    productImages.addEventListener("mouseenter", (event) => {
        toggleHoverImage(event, "hover");
    });
    productImages.addEventListener("mouseleave", (event) => {
        toggleHoverImage(event, "leave");
    });
});
// nextArrow.forEach((nextArrow) => {
//   nextArrow.addEventListener("click", (event) => {
//     handleImageNavigation(event, { direction: "next" });
//   });
// });
// prevArrow.forEach((prevArrow) => {
//   prevArrow.addEventListener("click", (event) => {
//     handleImageNavigation(event, { direction: "previous" });
//   });
// });