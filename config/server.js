let MAX_IMAGE_SIZE = 1 * 1024 * 1024; //---this is 1MB
module.exports.serverConfigurations = {
  //----------> maximum product images that can be uploaded
  MAX_PRODUCT_IMAGES: "2",
  MAX_IMAGE_SIZE,
  MAX_IMAGE_SIZE_WHOLE_NUMBER: MAX_IMAGE_SIZE.toString().slice(0, 1),
};
