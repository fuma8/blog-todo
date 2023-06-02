const express = require("express")
const router = express.Router()
const User = require("../Model/User")
var bcrypt = require("bcryptjs")
var jwt = require("jsonwebtoken")
require("dotenv").config()

router.post("/register", async(req, res) => {
    try{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        res.status(200).send("User has been created.")
    }catch(err){
        console.log(err)
    }
})

router.post("/login", async(req, res) => {
    try{
        const user = await User.findOne({username:req.body.username})
        if (!user) return res.status(404).send("User not found.")
        const passwordComparison = await bcrypt.compare(req.body.password, user.password)
        if (!passwordComparison) return res.status(400).send("Wrong the password or username.")
        res.status(200).send(user)
        
        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT)
        const { password, isAdmin, ...otherUserInfos } = user._doc
    }catch(err){
        console.log(err)
    }
})

router.post("/logout", (req, res) => {

})


module.exports = router