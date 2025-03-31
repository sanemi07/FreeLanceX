import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectdb.js";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("FreelanceX API Running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
