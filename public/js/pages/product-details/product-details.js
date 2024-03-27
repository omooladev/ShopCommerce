"use strict";
const mainImage = document.querySelector(".main-image");
const galleryImages = document.querySelectorAll(".gallery-images");
const changeMainImageHandler = (event) => {
    const target = event.target;
    //----------> remove the active class
    galleryImages.forEach(image => image.classList.remove("active"));
    if (target.src === mainImage.src) {
        return;
    }
    target.classList.add("active");
    mainImage.src = target.src;
};
//----------> event listeners
galleryImages.forEach((image) => {
    image.addEventListener("click", changeMainImageHandler);
});
