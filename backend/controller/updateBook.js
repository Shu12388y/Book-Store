import { BookModel } from "../model/BookModel.js";

export async function updateBook(req, res) {
  try {
    const { id } = req.params;
    const updateBook = await BookModel.findByIdAndUpdate(id, req.body);

    if (!updateBook) {
      return re.status(404).json({
        message: "server error",
      });
    }

    return res.status(201).json({
      message: "success",
    });
  } catch (error) {
    console.log("error", error);
  }
}
