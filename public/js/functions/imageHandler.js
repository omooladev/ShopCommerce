import { validateImage } from "../utils/imageValidator.js";
import { transformImage } from "../utils/transformImage.js";

const changeImageHandler = async (event) => {
  //----------> get the images
  let imageFiles = event.target.files;

  //----------> validate the images
  let validationResult = await validateImage({
    selectedImages: imageFiles,
    validationType: "length",
  });

  if (validationResult.hasError) {
    return;
  }

  for (let index = 0; index < imageFiles.length; index++) {
    let imageFile = imageFiles[index];
    validationResult = await validateImage({
      validationType: "file-type/size",
      imageFile,
    });

    if (validationResult.hasError) {
      break;
    }
  }

  if (validationResult.hasError) {
    return;
  }

  //----------> transform the image
  await transformImage(imageFiles);
};

export { changeImageHandler };
