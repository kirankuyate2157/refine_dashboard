import mongoose, { Schema } from "mongoose";

// making necessary Schema
const UserSchema = new mongoose.Schema({
  name: { type: "String", required: "true" },
  email: { type: "String", required: "true" },
  avatar: { type: "String", required: "true" },
  allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
});
//adding or creating to mongoDB (models)
const userModel = mongoose.model("User", UserSchema);

export default userModel;
