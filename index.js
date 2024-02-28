//----------> import modules
require("dotenv").config();

//----------> custom modules
const app = require("./app");
const { connectToDatabase } = require("./utils/connectToDatabase");

//----------> configurations
const { PORT = 5500, MONGO_URI } = process.env;

//----------> start server
const start = async () => {
  try {
    //----------> connect to database
    await connectToDatabase(MONGO_URI);

    //----------> listen to connection
    app.listen(PORT, () => {
      console.log(`Server is listening at PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    console.log("Something went wrong, please try again");
  }
};

//----------> initialize start server
start();
