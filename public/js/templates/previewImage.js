import { configureClassName } from "../helpers/configureClassName.js";
import { productInputNotValid } from "../lib/productInputValidity.js";

const cancelImageHandler = (event, { imageId }) => {
  //----------> find the index of the product image from either the transformed images or product image files
  const imageIndex = transformedImages.findIndex((image) => image.name === imageId);

  //----------> remove the image from the transformed images and product images files
  transformedImages.splice(imageIndex, 1);
  productImageFiles.splice(imageIndex, 1);

  //----------> get the product image container
  const previewContainer = document.querySelectorAll(".preview_container");

  for (let index = 0; index < previewContainer.length; index++) {
    //----------> loop through all the product container and find the image whose
    //            id is equal to the id of the image to be cancelled
    if (previewContainer[index].id === imageId) {
      //----------> update the dom
      previewImageContainer.removeChild(previewContainer[index]);
    }
  }

  //----------> if the total images uploaded is less than 4, then make the choose image button active
  if (productImageFiles.length < 4) {
    imageChoose.classList.remove("disabled");
    imageChoose.setAttribute("for", "product_image");
  }

  //----------> remove the older class
  if (productImageFiles.length !== 0) {
    //----------> add a new class
    const newClassName = configureClassName(productImageFiles.length);
    previewImageContainer.classList.add(`${newClassName}`);
  }
  if (productImageFiles.length === 0) {
    //----------> if there are no product images,set product image validity to false
    productInputNotValid({
      inputValidityName: "productImageIsValid",
      errorMessage: "No product image found. Please upload an image for this product",
    });
  }
  //----------> remove the former class
  const oldClassName = configureClassName(productImageFiles.length + 1);
  previewImageContainer.classList.remove(`${oldClassName}`);
};
const previewImageTemplate = async ({ src, alt, id }) => {
  //----------> elements
  const div = document.createElement("div");
  const image = document.createElement("img");
  const button = document.createElement("button");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");

  //----------> element configurations
  image.src = src;
  image.alt = alt;
  div.id = id;
  //----------> add class
  button.classList.add("cancel");
  image.classList.add("preview_image");
  div.classList.add("preview_container");

  //----------> configure button
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
