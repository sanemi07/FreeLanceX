import express from "express"
const router=express.Router();
router.post("/create",(req,res)=>{
    res.send("create a new job")
})
router.get("/jobs",(req,res)=>{
    res.send("create a new job")
})
export default router;