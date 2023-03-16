import express from "express";

//import all controllers
import {
  getAllUsers,
  createUser,
  getUserInfoByID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/").get(getAllUsers);
router.get("/").post(createUser);
router.get("/:id").get(getUserInfoByID);

export default router;
