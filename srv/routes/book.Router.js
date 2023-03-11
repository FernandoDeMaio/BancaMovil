const express = require('express');
const router = express.Router();
const bookController = require("../controller/book.Controller.js");


router.get("/getAllBooks", bookController.allBookController);

module.exports = router;