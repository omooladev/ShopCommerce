const cloudinary = require("cloudinary").v2;

cloudinary.config({ secure: true, cloudinary_url: process.env.CLOUDINARY_URL });

//<---------- Folder that all products will be saved to ---------->
//const uploadFolder = "ShopCommerce/test-products"; //----------> for testing
const uploadFolder = "ShopCommerce/products";
//<----------------------------------------------------------------------------->
module.exports = { cloudinary, uploadFolder };

