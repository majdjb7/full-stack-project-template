class StudentModel {
    constructor() {
        this.data = {}
    }

    getData() {
        return JSON.stringify(this.data)
    }

    getUserProccess() {
        $.get(`/studentPage/allprocesses/osama`, function (res) {
            this.data = res;
        })
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

