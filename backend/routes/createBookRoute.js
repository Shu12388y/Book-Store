import { Router } from "express";
import { AddBook } from "../controller/addBookController.js";
import {upload} from "../middleware/multier.js"

const createBookRoute = Router()


createBookRoute.post("/books",upload.single('image'),AddBook)



export default createBookRoute