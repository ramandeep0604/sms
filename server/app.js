import express from "express";
import dotenv from "dotenv"
import connectDb from "./db/config.js";
const app=express();

dotenv.config()

connectDb()

app.get('/health',(req,res)=>{
    res.send("health is ok")

})

app.listen(3000,()=>{
console.log("server is running");

})


