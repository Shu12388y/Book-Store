import { Router } from "express";
import { HomeRoute } from "../controller/homeController.js";

const router = Router()

router.get("/",HomeRoute)






export default router