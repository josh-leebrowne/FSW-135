const mongoose = require('mongoose')
const Scehma = mongoose.Schema

const userSchema = new Scehma ({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("User", userSchema)