const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const Process = require('../models/Process')
const Interview = require('../models/Interview')

let student = {
    "name": "osama",
    "email": "refagex134@leanrights.com",
    "password": "osama123",
    "phone": "0502746510",
    "Cohort": "cohort-1",
    "Processes": [{
        "JobTitle": "refagex134@leanrights.com",
        "companyName": "Microsoft",
        "Status": "Applied",
        "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=2818691559",
        "Interviews": [{
            "type": "HR",
            "date": "Saturday, May 5, 2018 2:06 PM",
            "description": "iudsahduiadsohaos"
        },
        {
            "type": "Phone interview",
            "date": "Sunday, August 19, 2018 9:23 PM",
            "description": "iosoadhoiasdhopsa"
        },
        {
            "type": "homework",
            "date": "Sunday, December 2, 2018 9:09 AM",
            "description": "alskjcblkas aohsjdopas nninaio oisandpo"
        }
        ]
    },
    {
        "JobTitle": "refagex134@leanrights.com",
        "companyName": "Nvidia",
        "Status": "Applied",
        "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=2807455919",
        "Interviews": [{
            "type": "HR",
            "date": "Saturday, May 5, 2018 2:06 PM",
            "description": "iudsahduiadsohaos"
        },
        {
            "type": "Phone interview",
            "date": "Sunday, August 19, 2018 9:23 PM",
            "description": "iosoadhoiasdhopsa"
        },
        {
            "type": "homework",
            "date": "Sunday, December 2, 2018 9:09 AM",
            "description": "alskjcblkas aohsjdopas nninaio oisandpo"
        }
        ]
    }, {
        "JobTitle": "refagex134@leanrights.com",
        "companyName": "Linnovate",
        "Status": "Applied",
        "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=2838375969",
        "Interviews": []
    }, {
        "JobTitle": "refagex134@leanrights.com",
        "companyName": "Apple",
        "Status": "Applied",
        "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=2821976948",
        "Interviews": [{
            "type": "HR",
            "date": "Saturday, May 5, 2018 2:06 PM",
            "description": "iudsahduiadsohaos"
        },
        {
            "type": "Phone interview",
            "date": "Sunday, August 19, 2018 9:23 PM",
            "description": "iosoadhoiasdhopsa"
        },
        {
            "type": "homework",
            "date": "Sunday, December 2, 2018 9:09 AM",
            "description": "alskjcblkas aohsjdopas nninaio oisandpo"
        }
        ]
    }
    ],
    "ProcessesCounter": 0
}

// router.post('/process/:studentName', async function (req, res) {
//     let process = req.body
//     let student = await Student.find({ name: req.params.studentName })
//     console.log(student)
//     let counter = student[0].ProcessesCounter + 1
//     let newProcess = new Process({
//         Id: counter,
//         JobTitle: process.JobTitle,
//         companyName: process.companyName,
//         link: process.link
//     })
//     newProcess.save()

//     student = await Student.findOneAndUpdate({ name: req.params.studentName }, {
//         $push: { Processes: newProcess },
//         $set: { ProcessesCounter: counter }
//     }, { new: true });
//     res.send(student)
// })

router.post('/process/:studentName', async function (req, res) {

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