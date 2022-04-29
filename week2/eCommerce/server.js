const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//DB
mongoose.connect('mongodb://localhost:27017/moviesdb')

//Routes
app.use('/inventory', require("./routes/inventoryRouter.js"))

//Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server Start
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})
