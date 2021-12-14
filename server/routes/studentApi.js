const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const Process = require('../models/Process')

router.post('/process/:studentName', async function (req, res) {
    let process = req.body
    // console.log(process)
    let process1 = new Process({
        Id: process.Id,
        JobTitle: process.JobTitle,
        companyName: process.companyName,
        Status: process.Status,
        link: process.link
    })
    const student = await Student.find({ name: req.params.studentName })
    process1.save()
    await Student.findOneAndUpdate(
        { name: req.params.studentName },
        { $push: { Processes: process1 } }
    );

    res.send(student)
})

router.get('/allprocesses/:studentName', async function (req, res) {
    const student = await Student.find({ name: req.params.studentName })
    res.send(student)
})

module.exports = router;