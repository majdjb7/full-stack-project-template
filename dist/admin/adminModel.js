class AdminModel {
    constructor() {
        this.data = {}
        this.cohortNames = {}
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
}