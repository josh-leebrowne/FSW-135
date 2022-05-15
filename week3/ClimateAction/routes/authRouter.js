const express = require('express')
const authRouter = express.Router()



// Get All
authRouter.get('/', (req, res, next) => {

    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send()
})

//Get One
authRouter.get("/:commentID", (req, res, next) => {

    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send()
})

//Add New
authRouter.post('/', (req, res, next) => {
    
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send()
})

//Update
authRouter.put("/:commentID", (req, res, next) => {

    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send()
})

//Delete
authRouter.delete("/:commentID", (req, res, next) => {
    
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send()
})

