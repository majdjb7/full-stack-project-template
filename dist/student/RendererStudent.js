class Renderer {
    constructor() { }
    renderData(data) {
        $("#proccess").empty()
        let source = $("#proccess-template").html();
        let template = Handlebars.compile(source)
        let html = template({ procces: data.Processes })
        $("#proccess").append(html)
    }

    renderName(data) {
        $("#user-name").empty()
        let source = $("#user-name-template").html();
        let template = Handlebars.compile(source)
        let html = template(data)
        $("#user-name").append(html)
    }
}