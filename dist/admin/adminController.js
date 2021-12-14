const adminModel = new AdminModel()
const rendererAdmin = new RendererAdmin()

let admin = JSON.parse(sessionStorage.getItem('user'))

const getProcesses = async function() {
    await adminModel.getStudentsProcesses()
    console.log(adminModel.data)

    rendererAdmin.renderData(adminModel.data)
    
}

getProcesses()

$('.data-div').on('click' , '.container' , function(){
    
    let visible = $(this).find('.more-info').data('visible')
    
    if (!visible)
    {
        $(this).find('.more-info').show()
        $(this).find('.more-info').data('visible' , true)
    }
        
    else
    {
        $(this).find('.more-info').hide()
        $(this).find('.more-info').data('visible' , false)
    }
})
