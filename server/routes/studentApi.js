const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const Process = require('../models/Process')

router.post('/process/:studentName', async function(req, res) {
    let process = req.body
        // console.log(process)
    const student = await Student.find({ name: req.params.studentName })
    let process1 = new Process({
        Id: student.counter++,
        JobTitle: process.JobTitle,
        companyName: process.companyName,
        Status: process.Status,
        link: process.link
    })
    process1.save()
    student = await Student.findOneAndUpdate({ name: req.params.studentName }, { $push: { Processes: process1 } }, { new: true });
    res.send(student)
})

router.get('/allprocesses/:studentName', async function(req, res) {
    const student = await Student.find({ name: req.params.studentName })
    res.send(student)
})

module.exports = router;