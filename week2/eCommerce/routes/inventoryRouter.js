const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

//Get All
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

//Get One
inventoryRouter.get('/:itemId', (req, res, next) => {
    Inventory.findById(
        { _id: req.params.itemId },
        (err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

//Post One
inventoryRouter.all('/', (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

//Update One
inventoryRouter.put('/:itemId', (req, res, next) => {
    Inventory.findByIdAndUpdate(
        {   _id: req.params.itemId},
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})


//Delete One
inventoryRouter.delete('/:itemId', (req, res, next) => {
    Inventory.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deletedItem.name} has been succesfully deleted.`)
    })
})

module.exports = inventoryRouter