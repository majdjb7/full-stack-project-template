const express = require('express')
const router = express.Router()
const Process = require('../models/Process')
const Student = require('../models/Student')

router.get('/allStudents', async function (req, res) {
    const students = await Student.find({})
    res.send({ name: students.name, processes: students.processes })
})

module.exports = router;