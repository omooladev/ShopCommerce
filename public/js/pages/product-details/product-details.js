"use strict";
const mainImage = document.querySelector(".main-image");
const galleryImages = document.querySelectorAll(".gallery-images");
const changeMainImageHandler = (event) => {
    const target = event.target;
    if (target.src === mainImage.src) {
        return;
    }
    mainImage.src = target.src;
};
//----------> event listeners
galleryImages.forEach((image) => {
    image.addEventListener("click", changeMainImageHandler);
});
