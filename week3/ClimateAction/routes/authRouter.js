const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')



//SignUp

authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("Username already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.wihtoutPassword(), process.env.SECRET)
            return res.status(201).send({token, user: savedUser.wihtoutPassword() })
        })
    })
})

//Login
authRouter.post("/login", (req, res, next) => {
    const failedLogin = 'Username or Password is Incorrect'
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error(failedLogin))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(403)
                return next(new Error(failedLogin))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error(failedLogin))
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(200).send({ token, user })
        })
    })
})

module.exports = authRouter