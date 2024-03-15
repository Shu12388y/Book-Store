import { Router } from "express";
import { AddBook } from "../controller/addBookController.js";

const createBookRoute = Router()


createBookRoute.post("/books", AddBook)



export default createBookRoute