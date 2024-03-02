//<---------- Import modules ---------->
// import { changeImageHandler } from "../../js/functions/imageHandler.js";
import { changeProductInputHandler } from "../functions/ProductInputHandler.js";

// const setProductDescriptionLength = (productDescriptionValue) => {
//   //----------> set the length of the product description in the inner html
//   productDescriptionLength.innerHTML = productDescriptionValue.length;

//   //----------> check if the length of the description is zero
//   if (productDescriptionValue.trim().length === 0) {
//     productInputNotValid({
//       inputValidityName: "productDescriptionIsValid",
//       errorMessage: "Please provide a product description",
//     });
//   } else {
//     //----------> check if the length of the product description value is greater than
//     if (productDescriptionValue.trim().length > 500) {
//       //----------> configure the styles
//       productDescriptionLength.style.color = "red";
//       return productInputNotValid({
//         inputValidityName: "productDescriptionIsValid",
//         errorMessage: "Product description length cannot exceed 500 characters",
//       });
//     }
//     //----------> configure the styles
//     productDescriptionLength.style.color = "black";
//     //----------> change the validity to true
//     productInputIsValid({ inputValidityName: "productDescriptionIsValid" });
//   }
// };

//<---------- EVENT LISTENERS FOR PRODUCTS INPUTS ---------->
productName.oninput = (event: Event) => changeProductInputHandler(event, "Name");
productPrice.oninput = (event: Event) => changeProductInputHandler(event, "Price");
productDescription.oninput = (event: Event) => changeProductInputHandler(event, "Description");
// productImage.onchange = (event: Event) => changeImageHandler(event);
