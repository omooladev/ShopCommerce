var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { setFormReply } from "./setFormReply.js";
export const submitFormHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    //----------> disable form button
    //productFormButton.disabled = true;//todo----------> uncomment this line
    //----------> reset reply when the form is submitted
    setFormReply("", "", "reset");
    //----------> create form data
    const formData = new FormData();
    //----------> assign a variable for the new product and
    let newProduct = {
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
        }
        else {
            formData.append(key, newProduct[key]);
        }
    }
    const isEditing = productForm.className.includes("isEditing");
    let productId = 5;
    //   const pageLocation = isEditing && window.location.href.split("/");
    //const productId = pageLocation && pageLocation[pageLocation.length - 1];
    try {
        const { data } = yield axios.post(`/admin${isEditing ? `/edit-product/${productId}` : "/add-product"}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    }
    catch (error) {
        console.log(error);
    }
    //     if (data.status === "success") {
    //       setFormReply({
    //         message: isEditing ? "Product edited successfully" : "Product item added successfully",
    //         type: "success",
    //       });
    //       // setTimeout(() => {
    //       //   console.log("reset form here");
    //       //   //resetForm();
    //       //   if (data.message === "Product has been edited successfully") {
    //       //     //window.location.href = "/admin/products";
    //       //   }
    //       // }, 2000);
    //     }
    //   } catch (error) {
    //     formatError(error, (errorMessage) => {
    //       setFormReply({
    //         message: errorMessage,
    //         type: "error",
    //       });
    //     });
    //   }
    //   productFormButton.disabled = false;
    // };}
});
//----------> configure form reply
// const setFormReply = ({ message, type, replyType }) => {
//   if (replyType === "reset") {
//     return resetFormReply();
//   }
//   productFormReply.innerHTML = message;
//   productFormReply.classList.add(`${type}`);
// };
//----------> reset form reply
// const resetFormReply = () => {
//   productFormReply.innerHTML = "";
//   productFormReply.classList.remove("error");
//   productFormReply.classList.remove("success");
// };
// const formatError = (error, cb) => {
//   const errorMessage = error.response ? error.response.data.message : error.message;
//   return cb(errorMessage);
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
//----------> listen to submit event for the form
// productForm.onsubmit = (event: Event) => submitFormHandler(event);
