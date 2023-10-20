import { configureClassName } from "../helpers/configureClassName.js";
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
      const oldClassName = configureClassName(productImageFiles.length - 1);
      previewImageContainer.classList.remove(`${oldClassName}`);
    }

    //----------> add the current product images length to the class
    const newClassName = configureClassName(productImageFiles.length);
    previewImageContainer.classList.add(`${newClassName}`);

    if (productImageFiles.length === 4) {
      imageChoose.classList.add("disabled");
      imageChoose.removeAttribute("for");
    }

    //----------> configure image name
    const imageName = Math.random() + "-" + imageFile.name;

    fileReader.readAsDataURL(imageFile);
    fileReader.onloadend = async () => {
      transformedImages.push({ name: imageName, result: fileReader.result });
      previewImageTemplate({ src: fileReader.result, alt: imageFile.name, id: imageName });

      if (index === imageFiles.length - 1) {
      }
    };
  }
};

export { transformImage };
