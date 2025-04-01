import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  status: { type: String, enum: ["open", "in-progress", "completed"], default: "open" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Job", JobSchema);
