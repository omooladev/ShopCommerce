const multer = require("multer");
const {
  serverConfigurations: { MAX_PRODUCT_IMAGES, MAX_IMAGE_SIZE },
} = require("../config/server");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "data/temp/product-images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const newFileName =
      file.originalname.split(".")[0] + "-" + uniqueSuffix + "." + file.originalname.split(".")[1];

    cb(null, newFileName);
  },
});

const uploadProductImages = multer({
  storage,
}).array("images[]");

module.exports = { uploadProductImages };
