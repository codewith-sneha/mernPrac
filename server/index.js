import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import {contactRouter} from "./Routes/contactRoute.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());
app.use('/contact',contactRouter);
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("server is running!");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})