const multer = require("multer");
const {
  serverConfigurations: { MAX_PRODUCT_IMAGES },
} = require("../config/server");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "data/product-images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const newFileName =
      file.originalname.split(".")[0] + "-" + uniqueSuffix + "." + file.originalname.split(".")[1];

    cb(null, newFileName);
  },
});
const fileFilter = (req, file, cb) => {
  console.log(req.files);
  return;
  if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    console.log("error");
    cb(null, false);
  }
};
const multerConfiguration = multer({
  storage,
  fileFilter,
}).array("images[]", MAX_PRODUCT_IMAGES);

module.exports = multerConfiguration;
