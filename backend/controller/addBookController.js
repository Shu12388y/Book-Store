import { BookModel } from "../model/BookModel.js";

export async function AddBook(req, res) {
  try {
    const { name, content, author, image } = req.body;

    if (![name && content && author && image]) {
      return res.status(400).json({
        message: "All the field are required",
      });
    }

    const findBook = await BookModel.findOne({ name });
    if (findBook) {
      return res.status(400).json({
        message: "Book already added",
      });
    }

    const bookName = {
      name,
      content,
      author,
      image,
    };

    const book = await BookModel.create(bookName);

    if (!book) {
      return res.status(400).json({
        message: "Internal server error",
      });
    }

    const saveBook = await book.save();
    if(!saveBook){
        return res.status(404).json({
            "message":"Server error"
        })
    }

    return res.status(200).json({
        "message":"Book added"
    })
  } catch (error) {
    console.log("error", error);
  }
}
