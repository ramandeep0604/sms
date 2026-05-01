import express from "express";

const route = express.Router();
import{register,login , verify} from "../controllers/auth.controller.js"
import verifyToken from "../middleware/verifyToken.js";


route.post('/register',register);
route.post('/login',login);
route.post('/verify',verifyToken,verify)

export default route;