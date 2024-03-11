import { Product } from "../interface/Product.js";
import { FormatError } from "../utils/FormatError.js";
import { setFormReply } from "./setFormReply.js";
import { setIsLoading } from "./setIsLoading.js";

let timeOutId: NodeJS.Timeout;

export const submitFormHandler = async (event: Event) => {
  event.preventDefault();
  //----------> reset reply when the form is submitted
  setFormReply("", "", "reset");
  //----------> create form data
  const formData = new FormData();
  //----------> assign a variable for the new product and
  let newProduct: Product = {
    name: productName.value,
    price: productPrice.value,
    description: productDescription.value,
    images: productImageFiles,
  };

  for (const key in newProduct) {
    if (key === "images") {
      newProduct[key].forEach((image) => {
        formData.append("images", image);
      });
    } else {
      formData.append(key, newProduct[key]);
    }
  }
  const isEditing = productForm.className.includes("isEditing");
  let productId = 5;
  //   const pageLocation = isEditing && window.location.href.split("/");
  //const productId = pageLocation && pageLocation[pageLocation.length - 1];
  //----------> set loading state
  setIsLoading(true, isEditing);
  try {
    const { data } = await axios.post(
      `/admin${isEditing ? `/edit-product/${productId}` : "/add-product"}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (data.status === "success") {
      const message = isEditing ? "Product edited successfully" : "Product item added successfully";
      //----------> Inform the admin that the product edit or add was successfully
      setFormReply(message, "success");
      //----------> set a timeout that counts for 2s then the form is reset automatically
      timeOutId = setTimeout(() => {
        //resetForm();
        resetTimeOut();
        if (data.message === "Product has been edited successfully") {
          //window.location.href = "/admin/products";
        }
      }, 2000);
    }
  } catch (error) {
    FormatError(error as any, (message: string) => {
      setFormReply(message, "error");
    });
  }

  setIsLoading(false, isEditing);
};

//----------> reset form reply
// const resetFormReply = () => {
//   productFormReply.innerHTML = "";
//   productFormReply.classList.remove("error");
//   productFormReply.classList.remove("success");
// };

// const resetForm = () => {
//   productName.value =
//     productPrice.value =
//     productImage.value =
//     productDescription.value =
//     productImageFile =
//     transformedImage =
//       "";
//   productDescriptionLength.innerHTML = "0";
//   productImagePreview.src = productImagePreview.alt = "";

//   productFormInputIsValid = {
//     productNameIsValid: false,
//     productPriceIsValid: false,
//     productDescriptionIsValid: false,
//     productImageIsValid: false,
//   };

//   saveFormValidity();
//   resetFormReply();
// };

const resetTimeOut = () => {
  //----------> clear the timeout
  clearTimeout(timeOutId);
};
