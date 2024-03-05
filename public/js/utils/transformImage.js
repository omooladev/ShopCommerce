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
            //----------> get each of the image in the image files array
            const imageFile = imageFiles[index];
            //----------> push the image file to the product image files array
            productImageFiles.push(imageFile);
            //----------> remove the older class
            if (productImageFiles.length !== 1) {
                const oldClassName = ConfigureClassName(productImageFiles.length - 1);
                previewImageContainer.classList.remove(`${oldClassName}`);
            }
            //----------> add the current product images length to the class
            const newClassName = ConfigureClassName(productImageFiles.length);
            previewImageContainer.classList.add(`${newClassName}`);
            if (productImageFiles.length === 4) {
                //todo imageChoose.classList.add("disabled");
                imageChoose.removeAttribute("for");
            }
            //----------> configure image name and ID
            const imageName = imageFile.name.split(".")[0];
            const imageId = imageName + "-" + Math.random() * 1000;
            fileReader.readAsDataURL(imageFile);
            fileReader.onloadend = () => __awaiter(void 0, void 0, void 0, function* () {
                let result = fileReader.result;
                transformedImages.push({ name: imageName, result });
                previewImageTemplate(result, imageName, imageId);
                if (index === imageFiles.length - 1) {
                    //---------> set image validity to true
                    productInputIsValid(inputValidityName);
                }
            });
        }
    }
});
