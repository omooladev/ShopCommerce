import { toggleHoverImage } from "./functions/toggleHoverImage.js";
import { HandleImageNavigation } from "./utils/HandleImageNavigation.js";

//----------> Loop through the product images and add an event listener to them
productImages.forEach((productImages) => {
  productImages.addEventListener("mouseenter", (event: Event) => {
    toggleHoverImage(event, "hover");
  });
  productImages.addEventListener("mouseleave", (event) => {
    toggleHoverImage(event, "leave");
  });
});

nextArrow.forEach((nextArrow) => {
  nextArrow.addEventListener("click", (event: Event) => {
    HandleImageNavigation(event, "next");
  });
});
prevArrow.forEach((prevArrow) => {
  prevArrow.addEventListener("click", (event: Event) => {
    HandleImageNavigation(event, "previous");
  });
});
