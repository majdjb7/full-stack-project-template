const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const Admin = require('../models/Admin')


router.get('/login/:username/:password', (req, res) => {
    Student.find({ name: req.params.username }, function(err, data) {
        if (data.length) {
            if (data[0].password == req.params.password) {
                res.send(data[0])
                return
            } else {
                res.status(400).send()
            }
        } else {
            Admin.find({ name: req.params.username }, function(err, data) {
                if (data.length) {
                    if (data[0].password == req.params.password) {
                        res.send(data[0])
                        return
                    } else {
                        res.status(400).send()
                    }
                } else {
                    res.send(undefined)
                }
            })
        }
    })
})

// router.get('/get', (req, res) => {
//     Item.find({}, function(err, data) {
//         console.log(data)
//         res.send(data)
//     })
// });

// router.post('/save', (req, res) => {
//     let data = req.body
//     let newItem = new Item(data)
//     newItem.save()
// })

module.exports = router