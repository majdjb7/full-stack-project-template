$('.btn-login').on('click', async function(e) {
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

$('.btn-signup').on('click', async function() {
    let username = $('#signup-name').val(),
        password = $('#signup-password').val(),
        email = $('#signup-email').val(),
        phone = $('#signup-phone').val(),
        Cohort = $('#signup-cohor').val()
    let user = await $.ajax({
        url: `/loginpage/register`,
        data: { name: username, password: password, email: email, phone: phone, cohort: Cohort },
        method: "POST",
    })
    if (!user) {
        alert("Name already exist please try another name")
        location.reload()
    }
})

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function() {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})