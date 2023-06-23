const express = require("express")
const app = express()
const mongoose = require("mongoose")
const threadRoute = require("./route/thread")
const userRoute = require("./route/user")
const authRoute = require("./route/auth")
const postRoute = require("./route/post")
const trelloRoute = require("./route/todoTrello")
const cookieParser = require("cookie-parser")

require("dotenv").config()
const PORT = 5000
app.use(express.json())
app.use(cookieParser())

app.use("/api/thread", threadRoute)
app.use("/api/blog/auth", authRoute)
app.use("/api/blog/user", userRoute)
app.use("/api/blog/post", postRoute)
app.use("/api/trello", trelloRoute)


mongoose.connect(
    process.env.MONGO
).then(console.log("DB is connected.")
).catch((err) => console.log(err))

app.listen(PORT, console.log("backend server is running."))