class StudentModel {
    constructor() {
        this.data = {}
    }

    getData() {
        return JSON.stringify(this.data)
    }

    async getUserProccess() {
        this.data = await $.get(`/studentPage/allprocesses/osama`)
    }

    async addUserProccess(newProccess) {
        let res = await $.ajax({
            url: `/studentPage/process/osama`,
            method: "POST",
            data: newProccess
        })
        this.data = res
    }

    // addProccess()
}

