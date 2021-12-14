const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const Process = require('../models/Process')
const Interview = require('../models/Interview')

router.post('/process/:studentName', async function (req, res) {
    let process = req.body
    let student = await Student.find({ name: req.params.studentName })
    console.log(student)
    let counter = student[0].ProcessesCounter + 1
    let newProcess = new Process({
        Id: counter,
        JobTitle: process.JobTitle,
        companyName: process.companyName,
        link: process.link
    })
    newProcess.save()

    student = await Student.findOneAndUpdate({ name: req.params.studentName }, {
        $push: { Processes: newProcess },
        $set: { ProcessesCounter: counter }
    }, { new: true });
    res.send(student)
})

router.get('/allprocesses/:studentName', async function (req, res) {
    const student = await Student.find({ name: req.params.studentName })
    res.send(student)
})

router.get('/allprocesses', async function (req, res) {
    const student = await Process.find({})
    res.send(student)
})

router.post('/studentPage/addInterview/:studentName/:proccessId', async function (req, res) {
    const interview = req.body
    let newInterview = new Interview({
        type: interview.type,
        date: interview.date,
        description: interview.description
    })
    newProcess.save()
    let processes = await Student.find({ name: req.params.studentName }, { $push: { Processes: newProcess } }, { Proccesses: 1 }, { new: true });
    console.log(processes)
    res.send(processes)

})
module.exports = router;