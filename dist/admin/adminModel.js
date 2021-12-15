class AdminModel {
    constructor() {
        this.data = {}
        this.cohortNames = {}
    }

    getStudentsProcesses = async function() {
        this.data = await $.get(`/adminPage/allStudents`)
    }

    FilterByCohort = async function(cohort) {
        this.data = await $.get(`/adminPage/allProcesses/${cohort}`)
    }

    getCohortNames = async function() {
        this.cohortNames = await $.get('/AdminPage/allCohortsNames')
    }

    getStatusStatistics = async function() {
        let statusStatistics = await $.get('/AdminPage/statusStatistics')
        return statusStatistics
    }
}