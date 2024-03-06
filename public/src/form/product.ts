//<---------- Import modules ---------->
import { changeProductInputHandler } from "../functions/ProductInputHandler.js";
import { submitFormHandler } from "../functions/formHandler.js";
import { changeImageHandler } from "../functions/imageHandler.js";

//<---------- EVENT LISTENERS FOR PRODUCTS INPUTS ---------->
productName.oninput = (event: Event) => changeProductInputHandler(event, "Name");
productPrice.oninput = (event: Event) => changeProductInputHandler(event, "Price");
productDescription.oninput = (event: Event) => changeProductInputHandler(event, "Description");
productImage.onchange = (event: Event) => changeImageHandler(event, "Image");
productForm.onsubmit = (event: Event) => submitFormHandler(event);
