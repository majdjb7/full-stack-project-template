const express = require('express')
const router = express.Router()
const Process = require('../models/Process')
const Student = require('../models/Student')

<<<<<<< HEAD
router.get('/allprocesses', async function (req, res) {
    const result = await Process.find({})
    res.send(result)
=======
router.get('/allStudents', async function(req, res) {
    const students = await Student.find({})
    res.send({ name: students.name, processes: students.processes })
>>>>>>> main
})

module.exports = router;