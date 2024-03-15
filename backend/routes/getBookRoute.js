import { getBooks } from "../controller/getBookController.js";
import {Router} from "express"

const getBooksRoute = Router()


getBooksRoute.get("/list",getBooks)



export default getBooksRoute