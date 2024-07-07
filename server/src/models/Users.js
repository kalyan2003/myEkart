import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type:String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: { type: String, required: true},
});

export const userModel = mongoose.model("users", UserSchema);