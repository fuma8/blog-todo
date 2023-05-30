const express = require("express")
const router = express.Router()
const Thread = require("../Model/Thread")

router.post("/createThread", async(req, res) => {
    const newThread = await Thread(req.body)
    try{
        const saveThread = await newThread.save()
        res.status(200).send(saveThread)
    }catch(err){
        res.json(err)
    }
})

router.get("/", async(req, res) => {
    try{
        const getThread = await Thread.find({})
        res.status(200).send(getThread)
    }catch(err){
        res.json(err)
    }
})

router.put("/updateThread/:id", async(req, res) => {
    try{
        const updateThread = await Thread.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json("Content has been updated.")
    }catch(err){
        res.json(err)
    }
})

router.delete("/deleteThread/:id", async(req, res) => {
    try{
        await Thread.findByIdAndDelete(req.params.id)
        res.status(200).json("Content has been deleted.")
    }catch(err){
        res.json(err)
    }
})

module.exports = router