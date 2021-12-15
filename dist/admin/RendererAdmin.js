class RendererAdmin {

    renderHeader(cohorts) {
        let source = $("#cohortNames-template").html();
        let template = Handlebars.compile(source)
        let html = template({ data: cohorts })
        $(".filters-header").empty().append(html)
    }

    renderData(data) {
        console.log(data);
        let source = $("#processes-template").html();
        let template = Handlebars.compile(source)
        let html = template({ processData: data })
        $(".data-div").empty().append(html)
    }
}