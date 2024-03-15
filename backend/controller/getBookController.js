import { BookModel } from "../model/BookModel.js";



export async function getBooks(_req,res){
    try {
        const listOfBooks = await BookModel.find({})
    
        if(!listOfBooks){
            return res.status(404).json({
                "message":"No Books Founded"
            })
        }
    
    
        return res.status(200).json({
            "message":"success",
            "data":listOfBooks
        })
    } catch (error) {
        console.log("error",error)
        
    }
}