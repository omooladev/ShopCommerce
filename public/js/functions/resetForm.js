import { toggleFilePickerDisabledState } from "../utils/TransformImage.js";
import { saveFormValidity } from "./saveFormValidity.js";
import { setFormReply } from "./setFormReply.js";
const resetPreviewImageContainer = () => {
    //----------> loop through and delete the preview images found in the preview image
    //            container
    for (let index = previewImageContainer.children.length - 1; index >= 0; index--) {
        //----------> the child element
        let child = previewImageContainer.children[index];
        //----------> remove the child
        previewImageContainer.removeChild(child);
    }
    //----------> get the primary class
    const defaultClassName = previewImageContainer.classList[0];
    //----------> reset the class
    previewImageContainer.className = defaultClassName;
};
export const resetForm = () => {
    resetPreviewImageContainer();
    productImageFiles = [];
    transformedImages = [];
    //----------> reset the disabled state of the file input
    toggleFilePickerDisabledState(productImageFiles);
    //----------> reset the form
    productForm.reset();
    //----------> configure the length to default
    productDescriptionLength.innerHTML = "0";
    //----------> save the form validity
    saveFormValidity("form-reset");
    //---------->reset the form reply
    setFormReply("", "", "reset");
};
