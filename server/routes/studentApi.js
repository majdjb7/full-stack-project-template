const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const Process = require('../models/Process')
const Interview = require('../models/Interview')

router.post('/process/:studentName', async function (req, res) {
    let process = req.body
    let student = await Student.find({ name: req.params.studentName })
    let counter = student[0].ProcessesCounter + 1
    let newProcess = new Process({
        Id: counter,
        JobTitle: process.JobTitle,
        companyName: process.companyName,
        link: process.link,
        StudentId: student[0]._id
    })
    newProcess.save()

    await Student.findOneAndUpdate({ name: req.params.studentName }, {
        $push: { Processes: newProcess },
        $set: { ProcessesCounter: counter }
    }, { new: true })
        .populate("Processes")
        .exec(function (err, student) {
            res.send(student)
        });

})

router.get('/allprocesses/:studentName', async function (req, res) {
    const student = await Student.find({ name: req.params.studentName }).populate("Processes")
        .exec(function (err, student) {
            res.send(student[0])
        });
})

router.get('/allprocesses', async function (req, res) {
    const student = await Process.find({})
    res.send(student)
})

router.post('/addInterview/:studentName/:proccessId', async function (req, res) {
    const interview = req.body
    let newInterview = new Interview({
        type: interview.type,
        date: interview.date,
        description: interview.description
    })
    newInterview.save()
    let student = await Student.find({ name: req.params.studentName })
    console.log(student)
    let process = await Process.findOneAndUpdate({ StudentId: student[0]._id, Id: req.params.proccessId }, { $push: { Interviews: newInterview } }, { new: true })
        .populate("Interviews")
        .exec(async function (err, student) {
            console.log(student);
            res.send(student)
        })


})
module.exports = router;