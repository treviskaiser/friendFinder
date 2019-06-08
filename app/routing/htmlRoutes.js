module.exports = function(app) {
  app.get("", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/index.html"));
  });

  app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });
};
