const mainImage = document.querySelector(".main-image") as HTMLImageElement;
const galleryImages = document.querySelectorAll(".gallery-images") as NodeListOf<HTMLImageElement>;

const changeMainImageHandler = (event: Event) => {
  const target = event.target as HTMLImageElement;

  if (target.src === mainImage.src) {
    return;
  }
  mainImage.src = target.src;
};

//----------> event listeners
galleryImages.forEach((image) => {
  image.addEventListener("click", changeMainImageHandler);
});
