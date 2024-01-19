import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(
  process.env.MONGO
).then(() => {
    console.log('MongoDb is connected...')
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

const app = express();

app.listen(3000, () => {
  console.log("listening on 3000!");
});

/*
app.get('/test' , (req , res)=>{
    res.json({message:'API is working'})
}) this is for testing purposes. but we dont want to json data here. */

app.use('/api/user' , userRoutes);