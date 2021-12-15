$('.login').on('click', function () {
    let username = $('.username').val()
    let password = $('.password').val()
    console.log(username);
    console.log(password);
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
        error: function (xhr, text, err) {
            alert("wrong password")
            location.reload()
        }
    })

})
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})