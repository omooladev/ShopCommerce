const productImages = document.querySelectorAll(".product-image-container .product-images");
const imageSwitcher = document.querySelectorAll(".image-switcher");
const prevArrow = document.querySelectorAll(".prev-arrow");
const nextArrow = document.querySelectorAll(".next-arrow");

const hoverImageHandler = (event) => {

  if (event.target.className.includes("image-switcher")){
    event.target.classList.add("active");
    return;
   
  }
 
  const imageSwitcher = event.target.parentElement.parentElement.children[1]
  //----------> check if there are more than one images
  const imageUrls = event.target.parentElement.dataset.imageUrls.split(",")

  if (imageUrls.length === 1) {
    return;
  }
  imageSwitcher.classList.add("active");
};
const leaveImageHandler = (event) => {
  const imagePreview = event.target.parentElement.parentElement.children[1];
  //----------> check if there are more than one images
  const imageUrls = event.target.parentElement.dataset.imageUrls.split(",");

  if (imageUrls.length === 1) {
    return;
  }
  imagePreview.classList.remove("active");
};
const viewNextImageHandler = (event) => {
  event.stopPropagation();
  let targetElement = event.target;
  if (event.target.className.includes("icon")) {
    targetElement = event.target.parentElement;
  }

  const nextArrow = targetElement;

  const prevArrow = targetElement.parentElement.children[0];
  const productImagesElement = targetElement.parentElement.parentElement.children[0];
  const productImagesArray = targetElement.parentElement.parentElement.children[0].children;

  //----------> check if the length of the images is only one
  if (productImagesArray.length === 1) {
    return;
  }
  let imageIndexNumber = Number(productImagesElement.dataset.imageIndexNumber);
  if (imageIndexNumber < productImagesArray.length - 1) {
    imageIndexNumber += 1;
    console.log(imageIndexNumber);
    productImagesElement.dataset.imageIndexNumber = imageIndexNumber;
    productImagesArray[imageIndexNumber - 1].classList.remove("active");
    productImagesArray[imageIndexNumber].classList.add("active");
    //----------> check if the previous arrow is already disabled
    if (prevArrow.disabled) {
      prevArrow.disabled = false;
    }
    if (imageIndexNumber === productImagesArray.length - 1) {
      nextArrow.disabled = true;
    }
  }
};
const viewPreviousImageHandler = (event) => {
  event.stopPropagation();
  let targetElement = event.target;
  if (event.target.className.includes("icon")) {
    targetElement = event.target.parentElement;
  }
  //----------> get all the elements needed
  const prevArrow = targetElement;
  const nextArrow = targetElement.parentElement.children[1];
  const productImagesElement = targetElement.parentElement.parentElement.children[0];
  const productImagesArray = targetElement.parentElement.parentElement.children[0].children;

  //----------> If the length of images in one, do nothing
  if (productImagesArray.length === 1) {
    return;
  }
  let imageIndexNumber = Number(productImagesElement.dataset.imageIndexNumber);

  // if (imageIndexNumber === 0) {
  //   return;
  // }
  if (imageIndexNumber > 0) {
    imageIndexNumber -= 1;
    productImagesElement.dataset.imageIndexNumber = imageIndexNumber;
    productImagesArray[imageIndexNumber + 1].classList.remove("active");
    productImagesArray[imageIndexNumber].classList.add("active");
    //----------> check if the next arrow is already disabled

    if (nextArrow.disabled) {
      nextArrow.disabled = false;
    }
    if (imageIndexNumber === 0) {
      prevArrow.disabled = true;
    }
  }
};

productImages.forEach((productImages) => {
  productImages.addEventListener("mouseover", hoverImageHandler);
  productImages.addEventListener("mouseout", leaveImageHandler);
});
imageSwitcher.forEach((imageSwitcher) => {
  imageSwitcher.addEventListener("mouseover", hoverImageHandler);
//   imageSwitcher.addEventListener("mouseout", leaveImageHandler);
// });
})
nextArrow.forEach((nextArrow) => {
  nextArrow.addEventListener("click", viewNextImageHandler);
});
prevArrow.forEach((prevArrow) => {
  prevArrow.addEventListener("click", viewPreviousImageHandler);
});
