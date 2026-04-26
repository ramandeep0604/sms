import express from "express";
import dotenv from "dotenv"
import connectDb from "./db/config.js";
import authRoutes from "./route/auth.routes.js"
const app=express();

dotenv.config()

connectDb()

app.get('/health',(req,res)=>{
    res.send("health is ok")

})
app.use('/api/v1/auth',authRoutes)

app.listen(3000,()=>{
console.log("server is running");

})


