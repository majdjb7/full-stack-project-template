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
    }

    async addInterview(obj, proccessId) {
        let res = await $.ajax({
            url: `/studentPage/addInterview/osama/${proccessId}`,
            method: "POST",
            data: obj
        })
    }

    async editStatusAccepted(name, proccessId) {
        let res = await $.ajax({
            url: `/studentPage/Accepted/${name}/${proccessId}`,
            method: "PUT"
        })

    }

    async editStatusRejected(name, proccessId) {
        let res = await $.ajax({
            url: `/studentPage/Rejected/${name}/${proccessId}`,
            method: "PUT"
        })

    }

}

