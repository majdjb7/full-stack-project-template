const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const Process = require('../models/Process')

router.post('/process', function (req, res) {
    let process = req.body
    console.log(process)
    let process1 = new Process({
        Id: process.Id,
        JobTitle: process.JobTitle,
        companyName: process.companyName,
        Status: process.Status,
        link: process.link
    })

    process1.save()
    res.send(process1)
})

router.get('/allprocesses/:studentName', async function (req, res) {
    const student = await Student.find({ name: req.params.studentName })
    res.send(student)
})

module.exports = router;