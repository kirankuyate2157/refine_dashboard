import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import userRouter from "./router/user.routes.js";
import propertyRouter from "./router/property.routes.js";

dotenv.config(); // accessing  .env data

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); //setting limit

app.get("/", (req, res) => {
  res.send({ message: "Hello World" }); //route response on root
});

//using middleware  "api/v1/users"

app.use("api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);

//server port and connection
const StartServer = async () => {
  try {
    //connect to data base via URL
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("server started 🚀.. on port http://localhost:8080")
    );
  } catch (err) {
    console.log(err);
  }
};

StartServer();
