const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const loginApi = require('./server/routes/loginApi')
const studentapi = require('./server/routes/studentApi')
const adminApi = require('./server/routes/adminApi')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/HackathonDB', { useNewUrlParser: true })

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.use('/login', loginApi)
app.use('/studentPage', studentapi)
app.use('/adminPage', adminApi)

const port = 8888

app.listen(process.env.PORT || port, function () {
    console.log(`Runnin runnin and runnin runnin on port ${port}`)
})