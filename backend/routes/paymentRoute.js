import express from "express";
const router = express.Router();

router.post("/fund", (req, res) => {
    res.send("Fund escrow for a job route");
});

router.post("/release", (req, res) => {
    res.send("Release payment to freelancer route");
});

export default router;
