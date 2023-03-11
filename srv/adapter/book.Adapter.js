const bookRepository = require("../repository/book.Repository.js")

exports.allBookAdapter = async(success, failured) => {
    console.log("allBookAdapter")
    let bookRepo = await new bookRepository()
    bookRepo.getAllBook()
    .then(resp=> {
          success(resp, 200);
    }).catch(err=>{
        console.log("el error: ",err.Error)
        failured(err, 500)
    })
 
};