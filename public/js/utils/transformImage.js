import { previewImageTemplate } from "../templates/previewImage.js";
//----------> transform image
const transformImage = async (imageFiles) => {
  //----------> check if image file was not passed
  if (!imageFiles) {
    return console.log("No images is found");
  }

  for (let index = 0; index < imageFiles.length; index++) {
    //---------->access file reader class
    const fileReader = new FileReader();

    //----------> get the image
    const imageFile = imageFiles[index];
    //----------> push the product image file
    productImageFiles.push(imageFile);

    //----------> remove the older class
    if (productImageFiles.length !== 1) {
      const oldClassName = configureProductImageContainerClassName(productImageFiles.length - 1);
      previewImageContainer.classList.remove(`${oldClassName}`);
    }

    //----------> add the current product images length to the class
    const newClassName = configureProductImageContainerClassName(productImageFiles.length);
    previewImageContainer.classList.add(`${newClassName}`);

    if (productImageFiles.length === 4) {
      imageChoose.classList.add("disabled");
      imageChoose.removeAttribute("for");
    }

    fileReader.readAsDataURL(imageFile);
    fileReader.onloadend = async () => {
      transformedImages.push({ image_name: imageFile.name, result: fileReader.result });
      previewImageTemplate({ src: fileReader.result, alt: imageFile.name, id: imageFile.name });

      if (index === imageFiles.length - 1) {
      }
    };
  }
};

const configureProductImageContainerClassName = (productImageFilesLength) => {
  let className =
    productImageFilesLength === 1
      ? "one"
      : productImageFilesLength === 2
      ? "two"
      : productImageFilesLength === 3
      ? "three"
      : productImageFilesLength === 4
      ? "four"
      : "";
  return className;
};
export { transformImage };
