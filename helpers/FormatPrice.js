let currency = "$";

module.exports.FormatPrice = (price) => {
  const formattedPrice = price.toLocaleString("en-US");
  return `${currency} ${formattedPrice}`;
};
