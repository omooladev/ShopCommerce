const productImages = document.querySelectorAll(".product-image-container .product-images");
const prevArrow = document.querySelectorAll(".prev-arrow");
const nextArrow = document.querySelectorAll(".next-arrow");

const hoverImageHandler = (event) => {
  const imageUrls = event.target.dataset.imageUrls.split(",");
  const activeImageIndex = event.target.dataset.activeImageIndex;
  if (imageUrls.length === 1) {
    return;
  }
  console.log("show arrow");
};
const viewNextImageHandler = (event) => {
  for (let i = 0; i < productImages.length; i++) {
    if (productImages[i].dataset.imageId === event.target.dataset.imageId) {
      const imageIndexNumber = Number(productImages[i].dataset.imageIndexNumber) + 1;

      if (imageIndexNumber === productImages.length - 1) {
        nextArrow[i].disabled = true;
        prevArrow[i].disabled = false;
      }
      if (0 < productImages[i].dataset.imageIndexNumber < productImages.length) {
        nextArrow[i].disabled = false;
        prevArrow[i].disabled = false;

        productImages[i].dataset.imageIndexNumber = imageIndexNumber;
        productImages[i].children[imageIndexNumber - 1].width = "0%";
        productImages[i].children[imageIndexNumber].width = "100%";
      }
      break;
    }
  }
};
productImages.forEach((productImageContainer) => {
  productImageContainer.addEventListener("mouseover", hoverImageHandler);
});
nextArrow.forEach((nextArrow) => {
  nextArrow.addEventListener("click", viewNextImageHandler);
});
