import dotenv from "dotenv";
dotenv.config(); // ✅ MUST be first

import express from "express";
import connectDb from "./db/config.js";
import authRoutes from "./route/auth.routes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
connectDb();

app.get('/health', (req, res) => {
  res.send("health is ok");
});

app.use('/api/v1/auth', authRoutes);

app.listen(3000, () => {
  console.log("server is running");
});