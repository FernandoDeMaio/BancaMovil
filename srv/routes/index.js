"use strict";
const express = require("express");
var router = express.Router();

router.get("/index", (_, res) => { res.sendFile(`${__dirname}/index.html`) });

module.exports = router;
