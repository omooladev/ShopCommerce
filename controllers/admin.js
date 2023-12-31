const { UnprocessableEntityError } = require("../errors");
const { productDetailsValidator } = require("../lib/productValidator");
const Product = require("../models/product");

const addProductToList = async (req, res) => {
  const { name, price, description } = req.body;
  // const { status, message } = await productImageValidator(req.files);
  // if (status === "failed") {
  //   throw new UnprocessableEntityError(message);
  // }
  const imageUrls = [];
  //----------> loop through the images and get their path
  if (req.files.length > 0) {
    req.files.forEach((image) => {
      imageUrls.push(image.path);
    });
  }

  //----------->TODO validate the products
  const { status, message } = await productDetailsValidator({
    name,
    price,
    description,
    imageUrls,
  });
  if (status === "failed") {
    throw new UnprocessableEntityError(message);
  }
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

//----------> view add product page
const viewAddProductPage = (req, res) => {
  res.render("admin/product-management", {
    pageTitle: "Add New Product",
    path: "/admin/add-product",
    isEditing: false,
  });
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
const viewAdminProductsPage = (req, res) => {
  Product.find()
    .then((products) => {
      res.render("admin/products", {
        products,
        path: "/admin/products",
        pageTitle: "Admin Products",
      });
    })
    .catch((error) => console.log(error));
};

module.exports = {
  viewAddProductPage,
  viewEditProductPage,
  addProductToList,
  viewAdminProductsPage,
  editProduct,
  deleteProduct,
};


