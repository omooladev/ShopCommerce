export const setFormReply = (message: string, type: string, action?: string) => {
  //----------> type can only be "error" or "success"
  if (action === "reset") {
    return resetFormReply();
  }
  productFormReply.innerHTML = message;
  productFormReply.classList.add(`${type}`);
};

//----------> reset form reply
const resetFormReply = () => {
  productFormReply.innerHTML = "";
  productFormReply.classList.remove("error");
  productFormReply.classList.remove("success");
};