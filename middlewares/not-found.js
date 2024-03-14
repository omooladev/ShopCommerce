module.exports.NotFound = (req, res) => {
  res.render("NotFound/NotFound.ejs", { pageTitle: "Page Not Found" });
};
