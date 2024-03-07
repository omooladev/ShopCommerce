//<---------- IMPORT MODULES ----------->
const multer = require("multer");

const {
  configurations: { MAX_IMAGE_SIZE, MAX_IMAGE_SIZE_WHOLE_NUMBER, MAX_PRODUCT_IMAGES },
} = require("./app");
const { UnprocessableEntityError } = require("../errors");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "data/temp");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const newFileName =
      file.originalname.split(".")[0] + "-" + uniqueSuffix + "." + file.originalname.split(".")[1];

    cb(null, newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (req.files.length <= MAX_PRODUCT_IMAGES) {
    if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new UnprocessableEntityError("Please upload images in PNG, JPG, or JPEG format"));
    }
  } else {
    cb(null, false);
    return cb(new UnprocessableEntityError(`Please upload ${MAX_PRODUCT_IMAGES} images or less `));
  }
};
const uploadProductImages = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_IMAGE_SIZE },
}).array("images");

module.exports = { uploadProductImages };
