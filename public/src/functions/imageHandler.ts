import { validateImage } from "../utils/imageValidator.js";

export const changeImageHandler = async (event: Event, inputType: string) => {
  //----------> get the images
  let imageElement = event.target as HTMLInputElement;
  let imageFiles: FileList | null = imageElement.files;

  //----------> validate the image files

  let validationResult = await validateImage(imageFiles, inputType);
  return console.log(validationResult);

  // if (validationResult.hasError) {
  //   return;
  // }

  // if (validationResult.hasError) {
  //   return;
  // }

  //----------> transform the image
  //await transformImage(imageFiles);
};
