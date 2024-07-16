import { productModel } from "../models/Home.js";
import express from "express";

const router = express.Router();


router.get("/pro", async (req,res) => {
  try {
    const products = await productModel.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
    
  }
});


export { router as productRouter};
