import {Router} from "express"

const healthCheckRoute = Router();



healthCheckRoute.get("/health",(_req,res)=>{
    res.send("Check is good").status(200)
})