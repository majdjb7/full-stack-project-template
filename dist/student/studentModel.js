class StudentModel {
    constructor() {
        this.data = {}
    }

    getData() {
        return JSON.stringify(this.data)
    }

    async getUserProccess(studentName) {
        this.data = await $.get(`/studentPage/allprocesses/${studentName}`)
    }

    async addUserProccess(newProccess, studentName) {
        let res = await $.ajax({
            url: `/studentPage/process/${studentName}`,
            method: "POST",
            data: newProccess
        })
    }

    async addInterview(obj, proccessId, studentName) {
        let res = await $.ajax({
            url: `/studentPage/addInterview/${studentName}/${proccessId}`,
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