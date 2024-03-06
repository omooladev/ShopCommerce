var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ConfigureClassName } from "../helpers/ConfigureClassName.js";
import { productInputIsValid } from "../lib/ProductInputValidity.js";
import { previewImageTemplate } from "../templates/PreviewImage.js";
export const TransformImage = (imageFiles, inputValidityName) => __awaiter(void 0, void 0, void 0, function* () {
    //----------> if image exist
    if (imageFiles) {
        for (let index = 0; index < imageFiles.length; index++) {
            //---------->access file reader class
            const fileReader = new FileReader();
            //----------> get each of the image in the imageFiles array
            const imageFile = imageFiles[index];
            //----------> push the image file to the productImageFiles array
            productImageFiles.push(imageFile);
            toggleClass(productImageFiles, "add");
            toggleFilePickerDisabledState(productImageFiles);
            //----------> configure image name and ID
            const imageName = imageFile.name.split(".")[0];
            const imageId = imageName + "-" + Math.random() * 1000;
            fileReader.readAsDataURL(imageFile);
            fileReader.onloadend = () => __awaiter(void 0, void 0, void 0, function* () {
                let result = fileReader.result;
                //----------> push the image into the transformed image array
                transformedImages.push({ imageId });
                previewImageTemplate(result, imageName, imageId, inputValidityName);
                if (index === imageFiles.length - 1) {
                    //---------> set image validity to true
                    productInputIsValid(inputValidityName);
                }
            });
        }
    }
});
export const toggleClass = (productImageFiles, action) => {
    console.log(previewImageContainer);
    if (action === "add") {
        const newClassName = ConfigureClassName(productImageFiles.length);
        previewImageContainer.classList.add(`${newClassName}`);
        if (productImageFiles.length > 1) {
            const oldClassName = ConfigureClassName(productImageFiles.length - 1);
            previewImageContainer.classList.remove(`${oldClassName}`);
        }
    }
    if (action === "cancel") {
        const oldClassName = ConfigureClassName(productImageFiles.length + 1); //this is because we have the latest instance
        previewImageContainer.classList.remove(`${oldClassName}`);
        if (productImageFiles.length > 0) {
            const newClassName = ConfigureClassName(productImageFiles.length);
            previewImageContainer.classList.add(`${newClassName}`);
        }
    }
};
export const toggleFilePickerDisabledState = (productImageFiles) => {
    //----------> if the total images uploaded is less than 4, then make file picker active
    if (productImageFiles.length < 4) {
        filePicker.classList.remove("disabled");
        filePicker.setAttribute("for", "product_image");
    }
    else {
        filePicker.classList.add("disabled");
        filePicker.removeAttribute("for");
    }
};
