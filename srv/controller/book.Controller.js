const bookAdapter = require("../adapter/book.Adapter.js");

exports.allBookController = (req, res) => {
console.log("allBookController")
bookAdapter.allBookAdapter(
    (value, status) => {
      res.status(status).send(value);
    },
    (err, status) => {
      res.status(status).send(err);
    }
  );
};


exports.allBookByChatController = (req, res) => {
  console.log("allBookByChatAdapter")
  bookAdapter.allBookByChatAdapter(
    req,
      (value, status) => {
        res.status(status).send(value);
      },
      (err, status) => {
        res.status(status).send(err);
      }
    );
  };