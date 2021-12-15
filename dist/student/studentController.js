const studentModel = new StudentModel()
const renderer = new Renderer()

let student = JSON.parse(sessionStorage.getItem('user'))

$(document).ready(async function () {
    await studentModel.getUserProccess()
    renderer.renderData(JSON.parse(studentModel.getData()))
    console.log(student);
})

$('#add-new-proccess').on('click', function () {
    $("#proccess-form").toggleClass('showProccessForm')
})

$('#add-proccess-btn').on('click', async function () {

    let JobTitle = $('.job-title-input').val(),
        companyName = $('.company-name-input').val(),
        link = $('.procces-link-input').val(),
        date = $('.date-input').val()

    if (!JobTitle || !companyName || !link || !date)
        return

    const data = {
        JobTitle: JobTitle,
        companyName: companyName,
        link: link,
        date: date,
        StudentId: student._id
    }
    await studentModel.addUserProccess(data)
    studentModel.getUserProccess()
    renderer.renderData(JSON.parse(studentModel.getData()))

})

// type: interview.type,
// date: interview.date,
// description: interview.description

$('.more-info').on('click', '.add-procces-btn', function () {

})

$('#proccess').on('click', '.header', function () {
    $(this).siblings('.more-info').toggleClass('showProccessForm')
})

$('#proccess').on('click', '.add-Interview-btn', function () {
    // console.log($(this).text());


    let type = $(this).closest('.rejected-accepted-btns').siblings('.add-interview').find('.interview-type-input').val(),
        date = $(this).closest('.rejected-accepted-btns').siblings('.add-interview').find('.interview-date-input').val(),
        description = $(this).closest('.rejected-accepted-btns').siblings('.add-interview').find('.interview-description-input').val()

    const data = {
        type: type,
        date: date,
        description: description,

    }
    // studentModel.addInterview(data)
    // await studentModel.addUserProccess(data)
    // studentModel.getUserProccess()
    // renderer.renderData(JSON.parse(studentModel.getData()))
    console.log(type + ' ' + date + ' ' + description);
})