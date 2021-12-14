const studentModel = new StudentModel()
const renderer = new Renderer()


studentModel.getUserProccess()

$('#add-new-proccess').on('click', function () {
    $("#proccess-form").toggleClass('showProccessForm')
})

$('#add-proccess-btn').on('click', function () {

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
    studentModel.addUserProccess(data)

})