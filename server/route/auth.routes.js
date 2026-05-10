
import express from "express";
import { register, login, verify, logout } from "../controllers/auth.controller.js";
import verifyToken from "../middleware/verifyToken.js";
import { checkRole } from "../middleware/checkRole.js";

const route = express.Router();

route.post("/register", register);
route.post("/login", login);

// ✅ FIXED ROUTE FLOW
route.post(
  "/verify",
  verifyToken,
  checkRole(["admin", "resident", "guard"]),
  verify
);
route.post('/logout',verifyToken , logout)

export default route;