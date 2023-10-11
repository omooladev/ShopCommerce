require("dotenv").config();
const app = require("./app");

const { PORT = 5000 } = process.env;

//----------> start function
const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening at PORT ${PORT}`);
    });
  } catch (error) {
    console.log("Something went wrong, please try again");
  }
};

//----------> initialize the start function
start();
