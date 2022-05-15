const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

//MiddleWare
app.use(express.json())
app.use(morgan('dev'))

//Connect to DB
mongoose.connect('mongodb://localhost:27017/ClimateAction')

//Routes


//Error Handling
app.use((err, req, res, next)=> {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server Startup
app.listen(9000, () => {
    console.log('Server is running on Port 9000')
})