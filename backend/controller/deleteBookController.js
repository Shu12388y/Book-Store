import { BookModel } from "../model/BookModel.js";

export async function deleteBook(req, res) {
  const { id } = req.params;
  const deleteBookId = await BookModel.findByIdAndDelete(id);
  if (!deleteBookId) {
    return res.status(404).json({
      message: "Server Error",
    });
  }

  return res.status(202).json({
    message: "success",
  });
}
