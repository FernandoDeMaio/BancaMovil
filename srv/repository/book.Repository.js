
module.exports = class bookRepository {

    constructor() {
        return (async () => {
            this.db = await cds.connect.to('db');
            return this;
        })();
    }
async getAllBook(){
    console.log("allBookRepository")
   
        let {Books} = await cds.entities('my.bookshop');
        
        let response = await SELECT `*` .from(Books)
        // let response= await INSERT.into(Books).entries(
        //     { ID: 4,
        //     title: "Nuevo libro",
        //     stock:32 
        // });
      return response;
       
}

}