const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentScehma = new Schema ({
    comment_field: {
        type: String
    },
    commentID: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Comment", commentScehma)