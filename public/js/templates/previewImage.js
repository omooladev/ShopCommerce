var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { productInputNotValid } from "../lib/ProductInputValidity.js";
import { toggleClass, toggleFilePickerDisabledState } from "../utils/TransformImage.js";
const cancelImageHandler = (event, imageId, inputValidityName) => {
    //----------> find the index of the product image from either the transformed images or product image files
    const imageIndex = transformedImages.findIndex((image) => image.imageId === imageId);
    //----------> remove the image from the transformed images and product images files
    transformedImages.splice(imageIndex, 1);
    productImageFiles.splice(imageIndex, 1);
    const imagePreviewContainer = document.querySelectorAll(".preview_container");
    for (let index = 0; index < imagePreviewContainer.length; index++) {
        //----------> loop through all the product image container and find the image whose
        //            id is equal to the id of the image to be cancelled
        if (imagePreviewContainer[index].id === imageId) {
            //----------> update the dom
            previewImageContainer.removeChild(imagePreviewContainer[index]);
        }
    }
    toggleFilePickerDisabledState(productImageFiles);
    toggleClass(productImageFiles, "cancel");
    //----------> If no product image can be found, automatically set the validity state to false
    if (productImageFiles.length === 0) {
        //----------> if there are no product images,set product image validity to false
        productInputNotValid(inputValidityName, "No product image found. Please upload an image for this product", "yes");
    }
};
export const previewImageTemplate = (src, alt, imageId, inputValidityName) => __awaiter(void 0, void 0, void 0, function* () {
    //----------> Create elements
    const div = document.createElement("div");
    const image = document.createElement("img");
    const button = document.createElement("button");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    //----------> add attributes to element
    image.alt = alt;
    div.id = imageId; //----------> where id is the unique key for the image
    //----------> If the image source is valid and if it is also a string
    if (src && typeof src === "string") {
        image.src = src;
    }
    //----------> add classes to the elements
    button.classList.add("cancel");
    image.classList.add("preview_image");
    div.classList.add("preview_container");
    //----------> configure button
    button.type = "button";
    button.addEventListener("click", (event) => cancelImageHandler(event, imageId, inputValidityName));
    //----------> append children
    button.appendChild(span1);
    button.appendChild(span2);
    div.appendChild(button);
    div.appendChild(image);
    return previewImageContainer.appendChild(div);
});
