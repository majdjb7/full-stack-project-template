class AdminModel {
    constructor() {
        this.data = {}

    }

    getStudentsProcesses = async function () {
        this.data = await $.get(`/adminPage/allStudents`)
        console.log(this.data)
    }

    // addUserProccess(newProccess) {
    //     console.log(newProccess);
    //     $.ajax({
    //         url: `/studentPage/process/`,
    //         method: "POST",
    //         data: newProccess
    //     })
    // }

    // addProccess()
}

