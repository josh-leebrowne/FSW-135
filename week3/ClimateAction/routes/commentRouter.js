const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')
const Issue = require('../models/issue')



//Add New Comment
commentRouter.post("/", (req, res, next) => {
    console.log(req.body)
    req.body.user = req.auth._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        Issue.findByIdAndUpdate(
            { _id: savedComment.issue },
            {$push: { comments: savedComment }},
            { new: true },
            (err) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(savedComment)
            }
        )
    })
})

module.exports = commentRouter