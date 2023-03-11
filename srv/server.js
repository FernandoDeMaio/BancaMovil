"use strict";

const cds = require("@sap/cds");
const port = process.env.PORT || 4004;
const routes = require("./routes/index.js");
const bodyParser = require('body-parser');
const createLocaleMiddleware = require ('express-locale');
cds.on("bootstrap", (app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
});

cds.on("listening", app => {
  cds.app.use(bodyParser.urlencoded({ extended: true }));
  cds.app.use(createLocaleMiddleware({
    "priority": ["accept-language", "default"],
    "default": "en_US"
  }))
  cds.app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
   
       // Custom Express Routes
  cds.app.use("/api/", routes);
})


module.exports = cds.server;