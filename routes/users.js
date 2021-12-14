import express from "express";
import { getUser, createUser, findUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

let users = [];

router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", findUser); 

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;