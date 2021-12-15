$('.btn-login').on('click', async function (e) {
    e.preventDefault()
    let username = $('#login-email').val()
    let password = $('#login-password').val()
    let user = await $.ajax({
        url: `/loginpage/login/${username}/${password}`,
        method: "GET",
    })
    if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        user.Admin ? window.location.replace("admin/adminPage.html") : window.location.replace("student/studentPage.html")
    } else {
        alert("user not found")
        location.reload()
    }
})


const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})