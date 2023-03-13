import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("Connected to DB 🪖..."))
    .catch((error) => console.log(console.log(error)));
};

export default connectDB;
