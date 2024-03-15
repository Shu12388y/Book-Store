import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: true,
      lowercase: true,
    },
    author: {
      type: String,
      required: true,
      lowercase: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const BookModel =
  mongoose.models.books || mongoose.model("Book", bookSchema);
