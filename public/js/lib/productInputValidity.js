import { saveFormValidity } from "../functions/saveFormValidity.js";
import { setFormReply } from "../functions/setFormReply.js";
export const productInputIsValid = (inputValidityName) => {
    //----------> If the input is already valid, don't validate it again
    if (productFormIsValid[inputValidityName]) {
        return;
    }
    //----------> dynamically set the validity of that input to true
    productFormIsValid[inputValidityName] = true;
    //----------> save form validity
    saveFormValidity();
    //----------> reset form reply because the input is valid
    return setFormReply("", "", "reset");
};
export const productInputNotValid = (inputValidityName, errorMessage, skip = "no") => {
    //----------> If Input is not valid and we do not skip the statement, do not run the validator again
    if (!productFormIsValid[inputValidityName] && skip === "no") {
        return;
    }
    //----------> dynamically set the validity of that input to false
    productFormIsValid[inputValidityName] = false;
    //----------> save form validity
    saveFormValidity();
    //----------> set error message since is it not valid
    return setFormReply(errorMessage, "error");
};
