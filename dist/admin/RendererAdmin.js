class RendererAdmin {

    renderCohortDropDown(cohorts) {
        let source = $("#cohortNames-template").html();
        let template = Handlebars.compile(source)
        let html = template({ data: cohorts })
        $(".cohort-filter").empty().append(html)
    }

    showStatusDropDown(status) {
        let source = $("#status-template").html();
        let template = Handlebars.compile(source)
        let html = template({ data: status })
        $(".status-filter").empty().append(html)
    }

    renderData(data) {
        let source = $("#processes-template").html();
        let template = Handlebars.compile(source)
        let html = template({ processData: data })
        $(".data-div").empty().append(html)
    }

    renderStatusStatistics(status) {
        let source = $("#statusStats-template").html();
        let template = Handlebars.compile(source)
        let html = template({ statusStats: status })
        $(".statusStats-div").empty().append(html)
    }

    renderCohortStatistics(status) {
        console.log(status)
        let source = $("#cohortStats-template").html();
        let template = Handlebars.compile(source)
        let html = template({ statusStats: status })
        $(".cohortStats-div").empty().append(html)
    }
}