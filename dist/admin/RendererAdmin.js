class RendererAdmin {

    renderHeader(cohorts) {
        let source = $("#cohortNames-template").html();
        let template = Handlebars.compile(source)
        let html = template({ data: cohorts })
        $(".filters-header").empty().append(html)
    }

    renderData(data) {
        let source = $("#processes-template").html();
        let template = Handlebars.compile(source)
        let html = template({ processData: data })
        $(".data-div").empty().append(html)
    }

    renderStatusStatistics(status) {
        console.log(status)
        let source = $("#statusStats-template").html();
        let template = Handlebars.compile(source)
        let html = template({ statusStats: status })
        $(".statusStats-div").empty().append(html)
    }
}