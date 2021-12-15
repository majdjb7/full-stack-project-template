class Renderer {
    constructor() { }
    renderData(data) {
        console.log(data.Processes);
        $("#proccess").empty()
        let source = $("#proccess-template").html();
        let template = Handlebars.compile(source)
        let html = template({ procces: data.Processes })
        $("#proccess").append(html)
    }
}