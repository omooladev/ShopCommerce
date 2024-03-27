const mainImage = document.querySelector(".main-image") as HTMLImageElement;
const galleryImages = document.querySelectorAll(".gallery-images") as NodeListOf<HTMLImageElement>;

const changeMainImageHandler = (event: Event) => {
  const target = event.target as HTMLImageElement;
  //----------> remove the active class
  galleryImages.forEach(image=>image.classList.remove("active"))
  if (target.src === mainImage.src) {
    return;
  }
  target.classList.add("active")
  mainImage.src = target.src;
};

//----------> event listeners
galleryImages.forEach((image) => {
  image.addEventListener("click", changeMainImageHandler);
});
