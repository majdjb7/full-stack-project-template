const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const Process = require('../models/Process')
const Interview = require('../models/Interview')
const Status = require('../Status')

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
        .populate({
            path: 'Processes',
            populate: {
                path: 'Interviews'
            }
        })
        .exec(function (err, students) {
            console.log(students);
            res.send(students)

        })
})

router.get('/allprocesses/:studentName', async function (req, res) {
    const student = await Student.find({ name: req.params.studentName }).populate({
        path: 'Processes',
        populate: {
            path: 'Interviews'
        }
    })
        .exec(function (err, student) {
            res.send(student[0])
        });
})


router.post('/addInterview/:studentName/:proccessId', async function (req, res) {
    const interview = req.body
    let newInterview = new Interview({
        type: interview.type,
        date: interview.date,
        description: interview.description
    })
    newInterview.save()

    let student = await Student.find({ name: req.params.studentName }).populate({
        path: 'Processes',
        populate: {
            path: 'Interviews'
        }
    })

    let process = await Process.findOneAndUpdate({ StudentId: student._id, Id: req.params.proccessId }, {
        $push: { Interviews: newInterview },
        $set: { Status: Status.Active.name }
    }, { new: true })
        .populate("Interviews")

    res.send(process)

})

router.put('/Rejected/:studentName/:proccessId', async function (req, res) {
    let student = await Student.find({ name: req.params.studentName }).populate({
        path: 'Processes',
        populate: {
            path: 'Interviews'
        }
    })

    let process = await Process.findOneAndUpdate({ StudentId: student._id, Id: req.params.proccessId }, {
        $set: { Status: Status.Rejected.name }
    }, { new: true })
        .populate("Interviews")

    res.send(process)

})

router.put('/Accepted/:studentName/:proccessId', async function (req, res) {
    let student = await Student.find({ name: req.params.studentName }).populate({
        path: 'Processes',
        populate: {
            path: 'Interviews'
        }
    })

    let process = await Process.findOneAndUpdate({ StudentId: student._id, Id: req.params.proccessId }, {
        $set: { Status: Status.Accepted.name }
    }, { new: true })
        .populate("Interviews")

    res.send(process)

})

module.exports = router;