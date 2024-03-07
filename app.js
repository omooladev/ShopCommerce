//----------> import modules
require("express-async-errors");
const path = require("path");
const express = require("express");

const swaggerUI = require("swagger-ui-express");
//----------> import custom dependencies
const errorHandlerMiddleware = require("./middlewares/error-handler");
const cors = require("cors");

//---------->routers
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
//----------> documentation
const swaggerDocumentation = require("./documentation/swaggerDocumentation");
const { cloudinary_js_config } = require("./config/cloudinary");

//----------> Initialize application
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//----------> documentation route
app.use("/api/docs", swaggerUI.serve);
app.use("/api/docs", swaggerUI.setup(swaggerDocumentation));
//----------> routes
app.use("/admin", adminRouter);
app.use(userRouter);

//----------> middlewares
app.use(errorHandlerMiddleware);

module.exports = app;
