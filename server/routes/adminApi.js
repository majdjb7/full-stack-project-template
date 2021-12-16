const express = require('express')
const router = express.Router()
const Process = require('../models/Process')
const Student = require('../models/Student')
const Status = require('../Status')

router.get('/allStudents', function(req, res) {
    Student.find({})
        .populate({
            path: 'Processes',
            populate: {
                path: 'Interviews'
            }
        })
        .exec(function(err, students) {
            res.send(students)

        })
})

router.get('/allCohortsNames', async function(req, res) {
    let cohortNames = await Student.aggregate([{ $project: { _id: 0, Cohort: 1 } }])
    let nonDuplicated = new Set()
    cohortNames.forEach(e => nonDuplicated.add(e.Cohort))
    res.send(Array.from(nonDuplicated))
})


router.get('/allStudents/:cohort', function(req, res) {
    Student.find({ Cohort: req.params.cohort })
        .populate({
            path: 'Processes',
            populate: {
                path: 'Interviews'
            }
        })
        .exec(function(err, students) {
            res.send(students)

        })
})

router.get('/allStatusValues', async function(req, res) {
    res.send(Status.allValues())

})
router.get('/allProcesses/:status', function(req, res) {
    Student.find({})
        .populate({
            path: 'Processes',
            populate: {
                path: 'Interviews'
            }
        })
        .exec(function(err, students) {

            let toReturn = []
            students.forEach(s => {
                if (s.Processes.some(p => p.Status === req.params.status)) {
                    let statusProcesses = s.Processes.filter(p => p.Status === req.params.status)
                    s.Processes = statusProcesses
                    toReturn.push(s)
                }
            })
            res.send(toReturn)
        })
})

router.get('/filters/:cohort/:status', function(req, res) {
    Student.find({ Cohort: req.params.cohort })
        .populate({
            path: 'Processes',
            populate: {
                path: 'Interviews'
            }
        })
        .exec(function(err, students) {

            let toReturn = []
            students.forEach(s => {
                if (s.Processes.some(p => p.Status === req.params.status)) {
                    let statusProcesses = s.Processes.filter(p => p.Status === req.params.status)
                    s.Processes = statusProcesses
                    toReturn.push(s)
                }
            })
            res.send(toReturn)
        })
})

router.get('/statusStatistics/', async function(req, res) {

    let students = await Student.find({})
        .populate({
            path: 'Processes',
            populate: {
                path: 'Interviews'
            }
        })

    let statusCount = 0
    let rest
    students.forEach(s => {
        if (s.Processes.some(p => p.Status === "Accepted")) {
            let statusProcesses = s.Processes.filter(p => p.Status === "Accepted")
            s.Processes = statusProcesses
            statusCount = statusProcesses.length
            rest = students.length - statusCount
        }
    })
    res.send({
        Accepted: statusCount,
        Rest: students.length
    })
})

router.get('/statusStatistics/:cohort', async function(req, res) {

    let students = await Student.find({ Cohort: req.params.cohort })
        .populate({
            path: 'Processes',
            populate: {
                path: 'Interviews'
            }
        })

    let statusCount = 0
    let rest
    students.forEach(s => {
        if (s.Processes.some(p => p.Status === "Accepted")) {
            let statusProcesses = s.Processes.filter(p => p.Status === "Accepted")
            s.Processes = statusProcesses
            statusCount = statusProcesses.length
            rest = students.length - statusCount
        }
    })
    res.send({
        Accepted: statusCount,
        Rest: students.length,
        Cohort: req.params.cohort
    })
})


module.exports = router;