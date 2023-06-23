const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    //Check whether token exist or not.
    if (!token) {
        return res.status(401).send("You are not authenticated.")
    }
    //Check wheter token is correct or not
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return res.status(403).send("Token is invalid.")
        req.user = user
        next()
    })
}

const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!"))
        }
    })
}
  

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        console.log(req.user.isAdmin)
        if (req.user.isAdmin){
            next()
        }else{
            return res.status(403).send("You are not authenticated.")
        }
    })
}

module.exports = verifyToken
module.exports = verifyUser
module.exports = verifyAdmin

