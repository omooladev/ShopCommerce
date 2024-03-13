export const HandleImageNavigation = (event, direction) => {
    event.stopPropagation();
    //----------> access the element clicked on
    let target = event.target;
    //----------> If the target element is an icon, then access the button element which is the parent element
    if (target.className.includes("icon")) {
        target = target.parentElement;
    }
    viewNextPrevImage(target, direction);
};
const viewNextPrevImage = (element, direction) => {
    let { prevButton, nextButton } = configureNextPrevButton(element, direction);
    //----------> Access the product images element
    const productImagesElement = element.parentElement.parentElement;
    //----------> Get all the children in the product images elements
    let productImagesElementChildren = element.parentElement.parentElement.children;
    //----------> we create a new array and remove the first item from the html collection.
    //            The first item is the image switcher element
    const productImagesArray = Array.prototype.slice.call(productImagesElementChildren, 1);
    //----------> check if only one image exist in the array then do not if the
    if (productImagesArray.length === 1) {
        return;
    }
    //----------> find the index of the image that is been displayed. The default is 0
    let imageIndexNumber = Number(productImagesElement.dataset.imageIndexNumber);
    if (direction === "next" && imageIndexNumber < productImagesArray.length - 1) {
        //----------> increase the image index number by 1
        imageIndexNumber += 1;
        //----------> update the image index number in the product images element
        productImagesElement.dataset.imageIndexNumber = imageIndexNumber.toString();
        //-----------> configure the class
        configureProductImageClassName(productImagesArray, imageIndexNumber, direction);
        //----------> check if the previous arrow is already disabled
        if (prevButton.disabled) {
            prevButton.disabled = false;
        }
        //----------> if the image index number is now equal to the number of images in the products images array,
        //           we disable the next button
        if (imageIndexNumber === productImagesArray.length - 1) {
            nextButton.disabled = true;
        }
    }
    //----------> The statement will only run if the image index number is greater than 0
    //            This means that the current image is not the first one
    if (direction === "previous" && imageIndexNumber > 0) {
        //----------> decrease the image index number by 1
        imageIndexNumber -= 1;
        //----------> update the image index number in the product images element
        productImagesElement.dataset.imageIndexNumber = imageIndexNumber.toString();
        //----------> configure the class
        configureProductImageClassName(productImagesArray, imageIndexNumber, direction);
        //----------> check if the next arrow is already disabled
        if (nextButton.disabled) {
            nextButton.disabled = false;
        }
        if (imageIndexNumber === 0) {
            prevButton.disabled = true;
        }
    }
};
const configureProductImageClassName = (productImages, imageIndexNumber, direction) => {
    if (direction === "next") {
        productImages[imageIndexNumber - 1].classList.remove("active");
        productImages[imageIndexNumber].classList.add("active");
    }
    if (direction === "previous") {
        productImages[imageIndexNumber + 1].classList.remove("active");
        productImages[imageIndexNumber].classList.add("active");
    }
};
const configureNextPrevButton = (element, direction) => {
    let nextButton;
    let prevButton;
    //----------> This means that if the next button is clicked
    if (direction === "next") {
        nextButton = element;
        prevButton = element.parentElement.children[0];
    }
    //----------> This means that if the previous button is clicked
    if (direction === "previous") {
        prevButton = element;
        nextButton = element.parentElement.children[1];
    }
    return { nextButton, prevButton };
};
