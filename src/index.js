// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'

import connectDB from './db/index.js';

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is listening at ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed!!",err);
    
})


























/*
import express from 'express';
const app = express()

{
    async()=>{
            
        try {
            
           let connectionInstance = await mongoose.connection(`${process.env.MONGODB_URI}/${DB_NAME}`)
           app.on("errror",(error) => {
                console.log("Errr:",error);
                throw error
           })

           app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
            
           })

        } catch (error) {
            console.log(error);
            throw err
            
        }
    



}} {}
*/