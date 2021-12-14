$('.login').on('click', async function() {
    let username = $('.username').val()
    let password = $('.password').val()

    const login = function(username, password) {
        $.ajax({
            method: "GET",
            url: `/loginpage/login/${username}/${password}`,
            success: user => {
                if (user) {
                    user.Admin ? window.location.replace("/admin/adminPage.html") : window.location.replace("/student/studentPage.html")
                    sessionStorage.setItem('user', user);
                } else {
                    alert("user not found")
                    location.reload()
                }
            },
            error: function(xhr, text, err) {
                alert("wrong password")
                location.reload()
            }
        })
    }
    login(username, password)
        // await $.get(`/loginpage/login/${username}/${password}`, function(err, res, user) {
        //         if (err) {

    //         }
    //         if (user) {
    //             user.Admin ? window.location.replace("/admin/adminPage.html") : window.location.replace("/student/studentPage.html")
    //         } else {
    //             alert("User not found")
    //         }
    //     })
    // window.location.replace("/student/studentPage.html");
})