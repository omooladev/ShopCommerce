import { ValidateProductDescription } from "./ValidateProductDescription.js";
export const ValidateProductInput = (value, type) => {
    if (type === "Description") {
        ValidateProductDescription(value.trim());
    }
};
