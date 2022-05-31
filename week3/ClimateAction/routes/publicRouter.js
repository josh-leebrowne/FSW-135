const express = require('express')
const publicRouter = express.Router()
const Issue = require('../models/issue')

//Get All 
publicRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

module.exports = publicRouter;