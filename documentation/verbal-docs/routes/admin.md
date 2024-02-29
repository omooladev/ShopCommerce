# Description

## 29/02/24

In the [admin.js](../../../routes/admin.js) file, the following was done:

- The express module was imported and the configuration for the validation of a
  product to be added was imported from the
  [multer.js](../../../config/multer.js) file

- For the posting of a product found in the post "/add-product" route, the
  multer configuration was added as a middleware to handle validations then All
  the needed functions for the other routes were imported from the
  [admin.js](../../../controllers/admin.js) file in the controllers folder
- The router was declared which accessed the Router method from the express
  module
- All the routes were linked with their respective functions and the
  [admin.js](../../../routes/admin.js) file was exported
