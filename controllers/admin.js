const fs = require("fs");
const { UnprocessableEntityError } = require("../errors");
const { productDetailsValidator } = require("../lib/productValidator");
const Product = require("../models/product");
const { FormatDescription } = require("../helpers/FormatDescription");
const { cloudinary, uploadFolder } = require("../config/cloudinary");
const {
  configurations: { MAX_PRODUCT_IMAGES },
} = require("../config/app");

//----------> render add new product page
const viewAddProductPage = (req, res) => {
  res.render("admin/product-management", {
    pageTitle: "Add New Product",
    path: "/admin/add-product",
    isEditing: false,
  });
};

const addProductToList = async (req, res) => {
  let { name, price, description } = req.body;
  const images = req.files;

  description = await FormatDescription(description);
  //----------->TODO validate the products details
  const { status, message } = await productDetailsValidator({
    name,
    price,
    description,
    imageUrls: req.files || [],
  });

  if (status === "failed") {
    throw new UnprocessableEntityError(message);
  }

  const imageUrls = [];
  let failedUploads = 0;
  for (let index = 0; index < images.length; index++) {
    const imagePath = images[index].path;
    try {
      const result = await cloudinary.uploader.upload(imagePath, {
        folder: uploadFolder,
        use_filename: true,
      });
      imageUrls.push(result.secure_url);
    } catch (error) {
      imageUrls.push("error");
      failedUploads++;
    }
    fs.unlinkSync(imagePath); //----------> delete images from temporary folder
  }
  //----------> This means that if none of our images were uploaded at all
  //-----------> This also means that when the total image failed to upload
  //             is equal to the number of images the user wants to upload
  if (failedUploads === MAX_PRODUCT_IMAGES || failedUploads === req.files.length) {
    throw new UnprocessableEntityError("There was an error during the product upload. Please try again.");
  }

  //----------> if product details are valid and images has been uploaded successfully
  // ---> create a new product
  const product = new Product({
    name,
    price,
    description,
    imageUrls,
  });
  //----------> save the product to the database
  await product.save();

  //----------> return response to client
  res.status(201).json({ status: "success", message: "Product Created Successfully" });
};

const editProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, price, description, transformedImage: imageUrl } = req.body;
  //const { image } = req.files || "";

  //----------> validate product details
  const { success, message } = await productDetailsValidator({
    name,
    price,
    description,
    imageUrl,
  });
  if (!success) {
    return res.status(400).json({ message });
  }

  Product.findOneAndUpdate(
    { _id: productId },
    { name, price, description, imageUrl, userId: req.user },
    { new: true }
  )
    .then((product) => {
      if (product) {
        return res.status(201).json({ message: "Product edited successfully" });
      }
    })
    .catch((error) => console.log(error));
};

const deleteProduct = (req, res) => {
  //----------> get product id
  const { productId } = req.params;
  //----------> delete product
  Product.findOneAndRemove({ _id: productId })
    .then((result) => res.redirect("/admin/products"))
    .catch((error) => console.log(error));
};

//----------> view edit product page
const viewEditProductPage = (req, res) => {
  const { productId } = req.params;
  Product.findById(productId).then((product) => {
    if (!product) {
      return res.redirect("/admin/products");
    }
    res.render("admin/product-management", {
      product,
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      isEditing: true,
    });
  });
};

//----------> view admin products page
const viewAdminProductsPage = async (req, res) => {
  const products = await Product.find();
  //----------> render the admin products page
  return res.render("admin/products", {
    path: "/admin/products",
    pageTitle: "Admin Products",
    products: products || [],
  });
};

module.exports = {
  viewAddProductPage,
  viewEditProductPage,
  addProductToList,
  viewAdminProductsPage,
  editProduct,
  deleteProduct,
};
