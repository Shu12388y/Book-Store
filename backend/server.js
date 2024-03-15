import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/homeRoute.js";
import { dbconnect } from "./database/db.js";
import createBookRoute from "./routes/createBookRoute.js";
import getBooksRoute from "./routes/getBookRoute.js";
import singleBookRoute from "./routes/getSingleBook.js";
import updateBookRoute from "./routes/updateBookRoute.js";
import deleteBookRoute from "./routes/deleteBookRoute.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(router);
app.use(createBookRoute);
app.use(getBooksRoute);
app.use(singleBookRoute);
app.use(updateBookRoute);
app.use(deleteBookRoute)
dbconnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is on", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
