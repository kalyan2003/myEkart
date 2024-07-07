import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;
    const user = await userModel.findOne({ username });

    if (user) {
      return res.json({ message: "user already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new userModel({
      username,
      password: hashedPassword,
      firstName,
      lastName,
    });

    await newUser.save();

    res.json({ message: "user registered successfully" });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      return req.json({ message: "user doesnt exist " });
    }

    const isPasswordvalid = await bcrypt.compare(password, user.password);

    if (!isPasswordvalid) {
      return res.json({ message: "check your usernaame or password " });
    }

    const token = jwt.json({ id: user._id }, "secret");
    res.json({ token, userID: user._id });

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error.message);
  }
});

export { router as userRouter };
