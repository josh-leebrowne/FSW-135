const mongoose = require('mongoose')
const Scehma = mongoose.Schema
const bcrypt = require('bcrypt')

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

userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified('password')) return next()
    bcrypt.hash(user.password, 8, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassowrd = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return next(err)
        return callback(null, isMatch)
    })
}

userSchema.methods.withoutPassowrd = function(){
    const user = this.Object()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)