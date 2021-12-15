const express = require('express')
const router = express.Router()
const Process = require('../models/Process')
const Student = require('../models/Student')

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

module.exports = router;