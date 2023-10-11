//----------> import packages
const path = require("path");
const express = require("express");
const swaggerUI = require("swagger-ui-express");

//----------> documentation
const swaggerDocumentation = require("./documentation/swaggerDocumentation");

//---------->routers
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

//----------> Initialize application
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

//----------> middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//----------> documentation route
app.use("/api/docs", swaggerUI.serve);
app.use("/api/docs", swaggerUI.setup(swaggerDocumentation));

//----------> routes
// app.use("/admin", adminRouter);
app.use(userRouter);

module.exports = app;
//MONGO_URI=mongodb+srv://omooladev:olawole2001@shopcommerce-cluster.quccq0i.mongodb.net/ShopCommerce?retryWrites=true&w=majority