const productImages = document.querySelectorAll(".product-image-container .product-images");
const imageSwitcher = document.querySelectorAll(".image-switcher");
const prevArrow = document.querySelectorAll(".prev-arrow");
const nextArrow = document.querySelectorAll(".next-arrow");

const toggleHoverImage = (event, { action }) => {
  event.stopPropagation();
  let targetElement = event.target;
  let imageSwitcher = targetElement.children[0];
  let imageUrls = targetElement.dataset.imageUrls.split(",");
  if (imageUrls.length === 1) {
    return;
  }
  if (action === "hover") {
    imageSwitcher.classList.add("active");
  }
  if (action === "leave") {
    imageSwitcher.classList.remove("active");
  }
};

const viewNextImageHandler = (event) => {
  event.stopPropagation();
  let targetElement = event.target;
  if (event.target.className.includes("icon")) {
    targetElement = event.target.parentElement;
  }

  const nextArrow = targetElement;

  const prevArrow = targetElement.parentElement.children[0];

  const productImagesElement = targetElement.parentElement.parentElement;

  let productImagesArray = targetElement.parentElement.parentElement.children;
  //----------> we create a new array and remove the first item from the html collection
  productImagesArray = Array.prototype.slice.call(productImagesArray, 1);

  //----------> check if the length of the images is only one
  if (productImagesArray.length === 1) {
    return;
  }
  let imageIndexNumber = Number(productImagesElement.dataset.imageIndexNumber);
  if (imageIndexNumber < productImagesArray.length - 1) {
    imageIndexNumber += 1;

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
  const productImagesElement = targetElement.parentElement.parentElement;

  let productImagesArray = targetElement.parentElement.parentElement.children;
  //----------> we create a new array and remove the first item from the html collection
  productImagesArray = Array.prototype.slice.call(productImagesArray, 1);
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
const viewImageHandler = () => {};
productImages.forEach((productImages) => {
  productImages.addEventListener("mouseenter", (event) => {
    toggleHoverImage(event, { action: "hover" });
  });
  productImages.addEventListener("mouseleave", (event) => {
    toggleHoverImage(event, { action: "leave" });
  });
});
nextArrow.forEach((nextArrow) => {
  nextArrow.addEventListener("click", viewNextImageHandler);
});
prevArrow.forEach((prevArrow) => {
  prevArrow.addEventListener("click", viewPreviousImageHandler);
});
