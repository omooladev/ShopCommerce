const fs = require("fs");
const unlinkFile = async (files) => {
  for (let index = 0; index < files.length; index++) {
    const filePath = files[index].path;
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("an error occurred with deleting images");
      } else {
        console.log("images deleted successfully");
      }
    });

    if (index === files.length - 1) {
      return { error: true };
    }
  }
};

module.exports = { unlinkFile };
