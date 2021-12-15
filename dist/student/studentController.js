const studentModel = new StudentModel()
const renderer = new Renderer()

let student = JSON.parse(sessionStorage.getItem('user'))
console.log(student.name)
$(document).ready(async function() {
    await studentModel.getUserProccess(student.name)
    renderer.renderData(JSON.parse(studentModel.getData()))
    console.log(student);
    renderer.renderName(student)
})

$('#add-new-proccess').on('click', function() {
    $("#proccess-form").toggleClass('showProccessForm')
})

$('#add-proccess-btn').on('click', async function() {

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
    await studentModel.addUserProccess(data, student.name)
    await studentModel.getUserProccess(student.name)
    renderer.renderData(JSON.parse(studentModel.getData()))

})

$('.more-info').on('click', '.add-procces-btn', function() {

})

$('#proccess').on('click', '.header', function() {
    $(this).siblings('.more-info').toggleClass('showProccessForm')
})

$('#proccess').on('click', '.add-Interview-btn', async function() {
    // console.log($(this).text());

    let type = $(this).closest('.rejected-accepted-btns').siblings('.add-interview').find(":selected").text(),
        date = $(this).closest('.rejected-accepted-btns').siblings('.add-interview').find('.interview-date-input').val(),
        description = $(this).closest('.rejected-accepted-btns').siblings('.add-interview').find('.interview-description-input').val(),
        proccessId = $(this).closest('.procces').data('proccess-id')

    if (!type || !date || !proccessId)
        return
    const data = {
        type: type,
        date: date,
        description: description,

    }

    await studentModel.addInterview(data, proccessId, student.name)
    await studentModel.getUserProccess(student.name)
    renderer.renderData(JSON.parse(studentModel.getData()))
})


$('#proccess').on('click', '.accepted', async function() {

    let proccessId = $(this).closest('.procces').data('proccess-id')
    await studentModel.editStatusAccepted(student.name, proccessId)
    await studentModel.getUserProccess(student.name)
    renderer.renderData(JSON.parse(studentModel.getData()))
})

$('#proccess').on('click', '.rejected', async function() {

    let proccessId = $(this).closest('.procces').data('proccess-id')
    console.log(proccessId + ' ' + student.name);
    await studentModel.editStatusRejected(student.name, proccessId)
    await studentModel.getUserProccess(student.name)
    renderer.renderData(JSON.parse(studentModel.getData()))
})