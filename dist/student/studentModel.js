class StudentModel {
    constructor() {
        this.data = {}

    }

    getUserProccess() {
        $.get(`/studentPage/allprocesses/osama`, function (res) {
            this.data = res;
        })
    }

    addUserProccess(newProccess) {
        console.log(newProccess);
        $.ajax({
            url: `/studentPage/process/`,
            method: "POST",
            data: newProccess
        })
    }

    // addProccess()
}

