const mongoose = require('mongoose')
const Student = require('../server/models/Student')
const Admin = require('../server/models/Admin')
const Process = require('../server/models/Process')
const Interview = require('../server/models/Interview')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/HackathonDB', { useNewUrlParser: true })

const studentData = require("./students.json")
studentData.forEach(student => {
    const e = new Student({
        name: student.name,
        email: student.email,
        password: student.password,
        phone: student.phone,
        Cohort: student.Cohort,
        ProcessesCounter: 0,
        Processes: student.Processes
    })
    e.save()
})

const adminData = require("./admin.json")
adminData.forEach(admin => {
    const e = new Admin({
        name: admin.name,
        email: admin.email,
        password: admin.password,
        phone: admin.phone
    })
    e.save()
})

const processData = require("./process.json")
processData.forEach(process => {
    const e = new Process({
        Id: process.Id,
        JobTitle: process.JobTitle,
        companyName: process.companyName,
        date: process.date,
        Status: process.Status,
        link: process.link,
        Interviews: process.Interviews
    })
    e.save()
})

const interviewData = require("./interview.json")
interviewData.forEach(interview => {
    const e = new Interview({
        type: interview.type,
        date: interview.Date,
        description: interview.Description,
    })
    e.save()
})