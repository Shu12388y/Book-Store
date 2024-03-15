import { BookModel } from "../model/BookModel.js";

export async function singleBook(req, res) {
 try {
     const { id } = req.params;
   
     const findBook = await BookModel.findById(id);
     if (!findBook) {
       return res.status(404).json({
         message: "Book Not Found",
       });
     }
   
     return res.status(200).json({
       message: "success",
       data: findBook,
     });
 } catch (error) {
    console.log("error",error)
 }
}
