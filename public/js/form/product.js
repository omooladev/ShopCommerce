//<---------- Import modules ---------->
import { changeProductInputHandler } from "../functions/ProductInputHandler.js";
import { changeImageHandler } from "../functions/imageHandler.js";
//<---------- EVENT LISTENERS FOR PRODUCTS INPUTS ---------->
productName.oninput = (event) => changeProductInputHandler(event, "Name");
productPrice.oninput = (event) => changeProductInputHandler(event, "Price");
productDescription.oninput = (event) => changeProductInputHandler(event, "Description");
productImage.onchange = (event) => changeImageHandler(event, "Image");
