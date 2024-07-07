import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

const connectMongo = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://pavanchimmiri2003:1eqYKiYhwdUzIMHW@cluster0.mjjzeyj.mongodb.net/Mykart?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mogoose connected");
  } catch (error) {
    console.log(error.message);
  }
};

app.listen(3001, () => {
  console.log("server is running");
  connectMongo();
});
