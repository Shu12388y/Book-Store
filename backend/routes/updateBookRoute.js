import { Router } from "express";
import { updateBook } from "../controller/updateBook.js";

const updateBookRoute = Router();

updateBookRoute.put("/list/:id", updateBook);

export default updateBookRoute;
