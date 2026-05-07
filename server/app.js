import dotenv from "dotenv";
dotenv.config(); // ✅ MUST be first

import express from "express";
import connectDb from "./db/config.js";
import authRoutes from "./route/auth.routes.js";
import cors from "cors";
import cookieParser from 'cookie-parser'
import roleRoutes from "./route/role.routes.js";
import flatRoutes from "./route/flat.routes.js";
import userRoutes from "./route/user.routes.js";

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true
}));

app.use(express.json());
app.use(cookieParser())
connectDb();

app.get('/health', (req, res) => {
  res.send("health is ok");
});

app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/roles", roleRoutes);
app.use("/api/v1/flats", flatRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(3000, () => {
  console.log("server is running");
});