const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const Process = require('../models/Process')
const Interview = require('../models/Interview')

// router.post('/process/:studentName', async function (req, res) {
//     let process = req.body
//     const student = await Student.find({ name: req.params.studentName })
//     let newProcess = new Process({
//         Id: student.counter++,
//         JobTitle: process.JobTitle,
//         companyName: process.companyName,
//         Status: process.Status,
//         link: process.link
//     })
//     process1.save()
//     student = await Student.findOneAndUpdate({ name: req.params.studentName }, { $push: { Processes: process1 } }, { new: true });
//     res.send(student)
// })

const student = {
    "name": "osama",
    "email": "refagex134@leanrights.com",
    "password": "osama123",
    "phone": "0502746510",
    "Cohort": "cohort-1",
    "Processes": [{
        "Id": "1",
        "JobTitle": "refagex134@leanrights.com",
        "companyName": "Microsoft",
        "Status": "Applied",
        "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=2818691559",
        "Interviews": []
    },
    {
        "Id": "2",
        "JobTitle": "refagex134@leanrights.com",
        "companyName": "Nvidia",
        "Status": "Applied",
        "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=2807455919",
        "Interviews": []
    }, {
        "Id": "3",
        "JobTitle": "refagex134@leanrights.com",
        "companyName": "Linnovate",
        "Status": "Applied",
        "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=2838375969",
        "Interviews": []
    }, {
        "Id": "4",
        "JobTitle": "refagex134@leanrights.com",
        "companyName": "Apple",
        "Status": "Applied",
        "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=2821976948",
        "Interviews": []
    }
    ]
}

router.post('/process/:studentName', async function (req, res) {

    res.send(student)
})


router.get('/allprocesses/:studentName', async function (req, res) {
    const student = await Student.find({ name: req.params.studentName })
    res.send(student)
})

router.post('/studentPage/addInterview/:studentName/:proccessId', async function (req, res) {
    const interview = req.body
    let newInterview = new Interview({
        type: interview.type,
        date: interview.date,
        description: interview.description
    })
})
module.exports = router;