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
import { TransformImage } from "../utils/TransformImage.js";
export const changeImageHandler = (event, inputType) => __awaiter(void 0, void 0, void 0, function* () {
    //----------> get the images
    let imageElement = event.target;
    let imageFiles = imageElement.files;
    let inputValidityName = `product${inputType}IsValid`;
    //----------> validate the image files
    //let validationResult = await validateImage(imageFiles, inputType);
    let validationResult = { hasError: false, errorMessage: "" }; //todo remove this line of code as it turns off the validation
    if (validationResult.hasError) {
        if (productImageFiles.length === 0) {
            return productInputNotValid(inputValidityName, validationResult.errorMessage, "yes");
        }
        //---------->This means that if we already have some images to be uploaded, then only want you to see the error message but still keep the state of the image as valid
        return productInputNotValid("", validationResult.errorMessage, "yes"); //----------> we do not supply validity name because we do not want the validity of the image to change
    }
    //productInputIsValid(inputValidityName);//todo uncomment this too
    //----------> transform the image
    yield TransformImage(imageFiles, inputValidityName);
});
