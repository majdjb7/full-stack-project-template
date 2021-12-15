$('.btn-login').on('click', async function() {
    let username = $('#login-email').val()
    let password = $('#login-password').val()

    const login = function(username, password) {
        $.ajax({
            method: "GET",
            url: `/loginpage/login/${username}/${password}`,
            success: user => {
                if (user) {
                    sessionStorage.setItem('user', JSON.stringify(user));
                    user.Admin ? window.location.replace("/admin/adminPage.html") : window.location.replace("/student/studentPage.html")
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
})

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function() {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})