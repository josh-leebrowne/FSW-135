const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentScehma = new Schema ({
    comment_field: {
        type: String
    },
    _commentID: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    _userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Comment", commentScehma)