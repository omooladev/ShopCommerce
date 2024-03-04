import { ValidateProductDescription } from "./ValidateProductDescription.js";

export const ValidateProductInput = (value: string, type: string) => {
  if (type === "Description") {
    ValidateProductDescription(value.trim());
  }
};
