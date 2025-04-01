import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["freelancer", "client"], required: true },
  walletAddress: { type: String, required: true, unique: true }, // Web3 Integration
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", UserSchema);
