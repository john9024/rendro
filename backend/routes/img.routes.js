const controller = require("../controllers/image.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/diningroom/pullout", controller.pullout);

  app.get("/api/diningroom/push", controller.push);
};