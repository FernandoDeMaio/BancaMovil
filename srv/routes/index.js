"use strict";
const express = require("express");
var router = express.Router();
const book = require("../routes/book.Router.js")
router.get("/index", (_, res) => { res.sendFile(`${__dirname}/index.html`) });
router.use("/book", book)
module.exports = router;
