const express = require("express")
const router = express.Router()
const verifyToken = require("../utils/verifyToken")
const verifyUser = require("../utils/verifyToken")
const verifyAdmin = require("../utils/verifyToken")


router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in.")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user, you are logged in and you can delete your account.")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello user, you are logged in and you are admin user.")
})

module.exports = router