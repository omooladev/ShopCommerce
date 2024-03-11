import { toggleFilePickerDisabledState } from "../utils/TransformImage.js";
import { saveFormValidity } from "./saveFormValidity.js";
import { setFormReply } from "./setFormReply.js";
const resetPreviewImageContainer = () => {
    for (let index = previewImageContainer.children.length - 1; index >= 0; index--) {
        let child = previewImageContainer.children[index];
        previewImageContainer.removeChild(child);
        console.log("removed");
    }
    //----------> reset the class
    previewImageContainer.className = "preview_image_container";
};
export const resetForm = () => {
    resetPreviewImageContainer();
    productImageFiles = [];
    transformedImages = [];
    toggleFilePickerDisabledState(productImageFiles);
    productForm.reset();
    productDescriptionLength.innerHTML = "0";
    saveFormValidity("form-reset");
    setFormReply("", "", "reset");
};
