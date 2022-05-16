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
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    }
})

module.exports = mongoose.model("Comment", issueSchema)