"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<---------- Import modules ---------->
// import { changeImageHandler } from "../../js/functions/imageHandler.js";
const ProductInputHandler_js_1 = require("../functions/ProductInputHandler.js");
//<---------- EVENT LISTENERS FOR PRODUCTS INPUTS ---------->
productName.oninput = (event) => (0, ProductInputHandler_js_1.changeProductInputHandler)(event, "Name");
productPrice.oninput = (event) => (0, ProductInputHandler_js_1.changeProductInputHandler)(event, "Price");
productDescription.oninput = (event) => (0, ProductInputHandler_js_1.changeProductInputHandler)(event, "Description");
// productImage.onchange = (event: Event) => changeImageHandler(event);
