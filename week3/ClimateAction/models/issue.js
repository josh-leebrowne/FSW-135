const mongoose = require('mongoose')
const Scehma = mongoose.Schema

const issueSchema = new Scehma ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default: 0
    },
    totalVotes: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    comments: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("Issue", issueSchema)