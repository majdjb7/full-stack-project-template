const adminModel = new AdminModel()
const rendererAdmin = new RendererAdmin()

let admin = JSON.parse(sessionStorage.getItem('user'))

const getProcesses = async function() {
    await adminModel.getStudentsProcesses()
    console.log(adminModel.data)

    rendererAdmin.renderData(adminModel.data)

}

const getFilters = async function() {
    await adminModel.getCohortNames()
    rendererAdmin.renderHeader(adminModel.cohortNames)
}
const getStudentsProcessesByCohort = async function() {
    // await adminModel.getStudentsProcessesByCohort()
}

$(document).ready(async function() {
    getProcesses()
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
