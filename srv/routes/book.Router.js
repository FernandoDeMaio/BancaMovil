const express = require('express');
const router = express.Router();
const bookController = require("../controller/book.Controller.js");


router.get("/getAllBooks", bookController.allBookController);
router.post("/getBooksByChat", bookController.allBookByChatController);
module.exports = router;