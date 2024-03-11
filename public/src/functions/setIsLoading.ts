export const setIsLoading = (isLoading: boolean, isEditing: boolean) => {
  if (isLoading) {
    //---------> disable button when loading
    productFormButton.disabled = true;
    if (!isEditing) {
      //---------->If we are on the add product page then update the button text
      productFormButton.innerHTML = "Adding Product...";
    } else {
      console.log("We are editing");
    }
  } else {
    productFormButton.disabled = false;
    if (!isEditing) {
      productFormButton.innerHTML = "Add Product";
    } else {
      console.log("we are editing");
    }
  }
};
