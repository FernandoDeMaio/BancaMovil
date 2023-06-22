const bookRepository = require("../repository/book.Repository.js");
require("dotenv").config();
const {Configuration, OpenAIApi} = require("openai");
//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


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

exports.allBookByChatAdapter = async(request, success, failured) => {
    console.log("allBookByChatAdapter")
    //esto va al server modularizado en una funciona aparte
    const configuration = new Configuration(
    {
        apiKey:process.env.OPEN_API_KEY
    }
    )
    const openai = new OpenAIApi(configuration)

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
        temperature: 0,
        max_tokens: 50,
        top_p: 1.0,
        frequency_penalty: 0.2,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
      console.log(response)
    success(response,200)


    let bookRepo = await new bookRepository()
    bookRepo.getAllBook()
    .then(resp=> {
          success(resp, 200);
    }).catch(err=>{
        console.log("el error: ",err.Error)
        failured(err, 500)
    })
 
};