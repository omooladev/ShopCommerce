var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validateImage } from "../utils/imageValidator.js";
export const changeImageHandler = (event, inputType) => __awaiter(void 0, void 0, void 0, function* () {
    //----------> get the images
    let imageElement = event.target;
    let imageFiles = imageElement.files;
    //----------> validate the image files
    let validationResult = yield validateImage(imageFiles, inputType);
    // if (validationResult.hasError) {
    //   return;
    // }
    // if (validationResult.hasError) {
    //   return;
    // }
    //----------> transform the image
    //await transformImage(imageFiles);
});
