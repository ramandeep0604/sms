import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deActivateUser
} from "../controllers/user.controller.js";
import { checkRole } from "../middleware/checkRole.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users",verifyToken, checkRole(['admin']), getAllUsers);
router.get("/users/:id",verifyToken,checkRole(['admin']), getUser);
router.patch("/users/:id",verifyToken,checkRole(['admin']), updateUser);
router.post("/users/:id",verifyToken,checkRole(['admin']), deActivateUser);

export default router;