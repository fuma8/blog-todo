const express = require("express")
const router = express.Router()
const todoTrello = require("../Model/TodoTrello")

router.post("/createTrello", async(req, res) => {
    const newTrello = await todoTrello(req.body)
    try{
        const saveTrello = await newTrello.save()
        res.status(200).send(saveTrello)
    }catch(err){
        res.json(err)
    }
})

router.get("/", async(req, res) => {
    try{
        const getTrello = await todoTrello.find()
        res.status(200).send(getTrello)
    }catch(err){
        res.json(err)
    }
})

module.exports = router