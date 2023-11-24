const multer = require("multer");
const {
  serverConfigurations: { MAX_PRODUCT_IMAGES, MAX_IMAGE_SIZE },
} = require("../config/server");
const { UnprocessableEntityError } = require("../errors");

const temporaryStorage = multer.diskStorage({
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

const fileFilter = (req, file, cb) => {
  if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new UnprocessableEntityError("Please upload images in PNG, JPG, or JPEG format"));
  }
};
const uploadProductImages = multer({
  storage: temporaryStorage,
  fileFilter,
  limits: { fileSize: MAX_IMAGE_SIZE },
}).array("images");

module.exports = { uploadProductImages };
