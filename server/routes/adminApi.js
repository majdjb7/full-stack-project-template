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


router.get('/allProcesses/:cohort', function(req, res) {
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
                    rest = students.length-statusCount
                }
            })
                res.send({Accepted: statusCount,
                    Rest: students.length
                })
})


module.exports = router;