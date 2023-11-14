const productImages = document.querySelectorAll(".shop-product-images");
const prevArrow = document.querySelectorAll(".prev-arrow");
const nextArrow = document.querySelectorAll(".next-arrow");

const hoverImageHandler = (event) => {
  const imageUrls = event.target.dataset.imageUrls.split(",");
  const activeImageIndex = event.target.dataset.activeImageIndex;
  if (imageUrls.length === 1) {
    return;
  }
};
const viewNextImageHandler = (event) => {let actualImage;
  for (let i = 0; i < productImages.length; i++) {
    if (productImages[i].dataset.imageId === event.target.dataset.imageId) {
      return productImages[i];
      break;
    }
  }
  console.log(actualImage);
};
productImages.forEach((image) => {
  image.addEventListener("mouseover", hoverImageHandler);
});
nextArrow.forEach((nextArrow) => {
  nextArrow.addEventListener("click", viewNextImageHandler);
});
