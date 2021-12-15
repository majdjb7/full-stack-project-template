const adminModel = new AdminModel()
const rendererAdmin = new RendererAdmin()

let admin = JSON.parse(sessionStorage.getItem('user'))

const getAllProcesses = async function() {
    await adminModel.getStudentsProcesses()
    rendererAdmin.renderData(adminModel.data)
}

// const getFilters = async function() {
//     await adminModel.getCohortNames()
//     rendererAdmin.renderCohortDropDown(adminModel.cohortNames)
//     rendererAdmin.showStatusDropDown(adminModel.status)
// }

const getStudentsProcessesByCohort = async function(cohort) {
    await adminModel.FilterByCohort(cohort)
    rendererAdmin.renderData(adminModel.data)
}

const getStudentsProcessesByStatus = async function(status) {
    await adminModel.FilterByStatus(status)
    rendererAdmin.renderData(adminModel.data)
}

$("#filterBtn").on('click', function() {
    let selectedCohort = $('#cohort :selected').text();
    switch (selectedCohort) {
        case "All Cohorts":
            getAllProcesses()
            break;
        default:
            getStudentsProcessesByCohort(selectedCohort)
    }
})

$(document).ready(async function() {
    getAllProcesses()
        // getFilters()

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