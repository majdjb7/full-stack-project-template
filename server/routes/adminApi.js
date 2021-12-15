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

router.get('/statusStatistics', async function(req, res) {
    let allProcesses = await Process.count({})
    let appliedProcesses = await Process.count({ "Status": "Applied" })
    let activeProcesses = await Process.count({ "Status": "Active" })
    let acceptedProcesses = await Process.count({ "Status": "Accepted" })
    let rejectedProcesses = await Process.count({ "Status": "Rejected" })
    let noReplyProcesses = await Process.count({ "Status": "no-Reply" })

    let appliedPercentage = ((appliedProcesses * 100) / allProcesses).toFixed(2) + "%"
    let activePercentage = ((activeProcesses * 100) / allProcesses).toFixed(2) + "%"
    let acceptedPercentage = ((acceptedProcesses * 100) / allProcesses).toFixed(2) + "%"
    let rejectedPercentage = ((rejectedProcesses * 100) / allProcesses).toFixed(2) + "%"
    let noReplyPercentage = ((noReplyProcesses * 100) / allProcesses).toFixed(2) + "%"

    res.send({
        total: allProcesses,
        applied: appliedProcesses,
        active: activeProcesses,
        accepted: acceptedProcesses,
        rejected: rejectedProcesses,
        noReply: noReplyProcesses,

        appliedPercentage: appliedPercentage,
        activePercentage: activePercentage,
        acceptedPercentage: acceptedPercentage,
        rejectedPercentage: rejectedPercentage,
        noReplyPercentage: noReplyPercentage,
    })
})


module.exports = router;