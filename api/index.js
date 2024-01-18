import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

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
