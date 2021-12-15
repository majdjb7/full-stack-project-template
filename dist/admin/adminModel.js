class AdminModel {
    constructor() {
        this.data = {}
        this.cohortNames = {}
        this.status = {}
    }

    getStudentsProcesses = async function() {
        this.data = await $.get(`/adminPage/allStudents`)
        console.log(this.data)
    }

    FilterByCohort = async function(cohort) {
        console.log(cohort)
        this.data = await $.get(`/adminPage/allProcesses/${cohort}`)
    }

    getCohortNames = async function() {
        this.cohortNames = await $.get('/AdminPage/allCohortsNames')
        console.log(this.cohortNames)
    }

    getStatusValues = async function() {
        this.status = await $.get(`/AdminPage/allStatusValues`)
    }

    FilterByStatus = async function(status) {
        console.log(status)
        this.data = await $.get(`/adminPage/allProcesses/${status}`)
    }

}