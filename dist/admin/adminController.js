const adminModel = new AdminModel()
const rendererAdmin = new RendererAdmin()

let admin = JSON.parse(sessionStorage.getItem('user'))

const getAllProcesses = async function() {
    await adminModel.getStudentsProcesses()
    rendererAdmin.renderData(adminModel.data)
}

const getFilters = async function() {
    await adminModel.getCohortNames()
    rendererAdmin.renderCohortDropDown(adminModel.cohortNames)
    await adminModel.getStatusValues()
    rendererAdmin.showStatusDropDown(adminModel.status)
}

const getStudentsProcessesByCohort = async function(cohort) {
    await adminModel.FilterByCohort(cohort)
    rendererAdmin.renderData(adminModel.data)
}

const getStudentsProcessesByStatus = async function(status) {
    await adminModel.FilterByStatus(status)
    rendererAdmin.renderData(adminModel.data)
}

const getStudentsProcessesByStatusAndCohort = async function(status, cohort) {
    await adminModel.FilterByStatusAndCohort(status, cohort)
    rendererAdmin.renderData(adminModel.data)

}

$("#filterBtn").on('click', function() {
    let selectedCohort = $('#cohort :selected').text();
    let selectedStatus = $('#status :selected').text();
    if (selectedCohort === "All Cohorts" && selectedStatus === "All status") {
        getAllProcesses()
    } else if (selectedStatus === "All status" && selectedCohort != "All Cohorts") {
        getStudentsProcessesByCohort(selectedCohort)
    } else if (selectedStatus != "All status" && selectedCohort === "All Cohorts") {
        getStudentsProcessesByStatus(selectedStatus)
    } else {
        getStudentsProcessesByStatusAndCohort(selectedStatus, selectedCohort)
    }
})

$(document).ready(async function() {
    getAllProcesses()
    getFilters()

})


$('.data-div').on('click', '.container', function() {

    let visible = $(this).find('.more-info').data('visible')

    if (!visible) {
        $(this).find('.more-info').show()
        $(this).find('.more-info').data('visible', true)
    } else {
        $(this).find('.more-info').hide()
        $(this).find('.more-info').data('visible', false)
    }
})


$('.statistics-div').on('click', '.status-statistics', async function() {
    let statusStatistics = await adminModel.getStatusStatistics()

    rendererAdmin.renderStatusStatistics(statusStatistics)

    $('#piechart_3d').toggleClass('hidden-chart')
})