//-----------> The Reason fro Formatting the description is to
//             remove line breaks that are found

module.exports.FormatDescription = (description) => {
  return description.replace(/(\r\n|\r|\n)/g, "\n");
};
