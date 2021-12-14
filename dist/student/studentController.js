const studentModel = new StudentModel()
const renderer = new Renderer()

let student = JSON.parse(sessionStorage.getItem('user'))

studentModel.getUserProccess()
renderer.renderData(JSON.parse(studentModel.getData()))
$('#add-new-proccess').on('click', function() {
    $("#proccess-form").toggleClass('showProccessForm')
})

$('#add-proccess-btn').on('click', async function() {

    let JobTitle = $('.job-title-input').val(),
        companyName = $('.company-name-input').val(),
        link = $('.procces-link-input').val(),
        date = $('.date-input').val()

    const data = {
        JobTitle: JobTitle,
        companyName: companyName,
        link: link,
        date: date
    }
    await studentModel.addUserProccess(data)
    renderer.renderData(JSON.parse(studentModel.getData()))

})