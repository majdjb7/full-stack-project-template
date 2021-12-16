class AdminModel {
    constructor() {
        this.data = {}
        this.cohortNames = {}
        this.status = {}
    }

    getStudentsProcesses = async function() {
        this.data = await $.get(`/adminPage/allStudents`)
    }

    FilterByCohort = async function(cohort) {
        this.data = await $.get(`/adminPage/allStudents/${cohort}`)
    }

    getCohortNames = async function() {
        this.cohortNames = await $.get('/AdminPage/allCohortsNames')
    }

    getStatusStatistics = async function() {
        let statusStatistics = await $.get('/AdminPage/statusStatistics')
        return statusStatistics
    }

    getStatusStatisticsByCohort = async function(cohort) {
        let statusStatisticsByCohort = await $.get(`/AdminPage/statusStatistics/${cohort}`)
        return statusStatisticsByCohort
    }

    getStatusValues = async function() {
        this.status = await $.get(`/AdminPage/allStatusValues`)
    }

    FilterByStatus = async function(status) {
        this.data = await $.get(`/AdminPage/allProcesses/${status}`)
    }

    FilterByStatusAndCohort = async function(status, cohort) {
        this.data = await $.get(`/AdminPage/filters/${cohort}/${status}`)
    }

}