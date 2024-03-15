import { Router } from "express";
import { deleteBook } from "../controller/deleteBookController.js";

const deleteBookRoute = Router();


deleteBookRoute.delete("/list/:id",deleteBook);



export default deleteBookRoute
