//<---------- Import modules ---------->
// import { changeImageHandler } from "../../js/functions/imageHandler.js";
import { changeProductInputHandler } from "../functions/ProductInputHandler.js";

//<---------- EVENT LISTENERS FOR PRODUCTS INPUTS ---------->
productName.oninput = (event: Event) => changeProductInputHandler(event, "Name");
productPrice.oninput = (event: Event) => changeProductInputHandler(event, "Price");
productDescription.oninput = (event: Event) => changeProductInputHandler(event, "Description");
// productImage.onchange = (event: Event) => changeImageHandler(event);
