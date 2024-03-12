export const toggleHoverImage = (event: Event, action: string) => {
  console.log(action);
  event.stopPropagation();

  //----------> get the target element that was hovered or left
  let targetElement = event.target as HTMLElement;
  let imageSwitcher = targetElement.children[0]; //----------> access the image switcher component

  //----------> if the image urls exist on the target element
  if (targetElement.dataset.imageUrls) {
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
  }
};
