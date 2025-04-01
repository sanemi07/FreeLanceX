import express from "express"
const router=express.Router();
router.post("/bid",(req,res)=>{
    res.send("bid for project")
})
router.get("/bids/:jobId",(req,res)=>{
    res.send("get all the bids")
})
export default router;