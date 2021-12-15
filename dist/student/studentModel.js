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
        // this.data = res
        // console.log(res);
    }

    async addInterview(obj, proccessId) {
        let res = await $.ajax({
            url: `/studentPage/addInterview/osama/${proccessId}`,
            method: "POST",
            data: obj
        })
        // this.data = res
    }

}

