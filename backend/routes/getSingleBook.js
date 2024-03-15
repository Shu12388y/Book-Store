import { Router } from "express";
import { singleBook } from "../controller/getSingleBook.js";


const singleBookRoute = Router();



singleBookRoute.get("/list/:id",singleBook)




export default singleBookRoute