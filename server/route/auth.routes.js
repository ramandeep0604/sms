import express from "express";

const route = express.Router();
import{register,login} from "../controllers/auth.controller.js"
route.post('/register',register);
route.post('/login',login);

export default route;