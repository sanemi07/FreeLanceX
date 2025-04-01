import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectdb.js";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import jobRoutes from "./routes/jobRoute.js";
import bidRoutes from "./routes/bidRoute.js";
import paymentRoutes from "./routes/paymentRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/bids", bidRoutes);
app.use("/api/payments", paymentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
