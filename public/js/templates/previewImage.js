import { configureClassName } from "../helpers/configureClassName.js";

const cancelImageHandler = (event, { imageId }) => {
  const imageIndex = transformedImages.findIndex((image) => image.name === imageId);

  //----------> remove the image from the transformed images and product images files
  transformedImages.splice(imageIndex, 1);
  productImageFiles.splice(imageIndex, 1);

  //----------> get the preview container
  const previewContainer = document.querySelectorAll(".preview_container");

  for (let index = 0; index < previewContainer.length; index++) {
    if (previewContainer[index].id === imageId) {
      //----------> update the dom
      previewImageContainer.removeChild(previewContainer[index]);
    }
  }

  if (productImageFiles.length < 4) {
    imageChoose.classList.remove("disabled");
    imageChoose.setAttribute("for", "product_image");
  }

  //----------> remove the older class
  if (productImageFiles.length !== 0) {
    //----------> add the current product images length to the class
    const newClassName = configureClassName(productImageFiles.length);
    previewImageContainer.classList.add(`${newClassName}`);
  }

  const oldClassName = configureClassName(productImageFiles.length + 1);
  previewImageContainer.classList.remove(`${oldClassName}`);
};
const previewImageTemplate = async ({ src, alt, id }) => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  const button = document.createElement("button");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  image.src = src;
  image.alt = alt;
  div.id = id;
  //----------> add class
  button.classList.add("cancel");
  image.classList.add("preview_image");
  div.classList.add("preview_container");

  //----------> add text content to the button

  button.type = "button";
  button.addEventListener("click", (event) => cancelImageHandler(event, { imageId: id }));

  //----------> append children
  button.appendChild(span1);
  button.appendChild(span2);
  div.appendChild(button);
  div.appendChild(image);
  return previewImageContainer.appendChild(div);
};

export { previewImageTemplate };
