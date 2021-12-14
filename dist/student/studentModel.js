class StudentModel {
    constructor() {
        this.data = []
    }

    getUserProccess() {
        $.get('/studentPage/allprocesses/osama', function (res) {
            console.log(res);
            this.data = res
        })
    }
}

