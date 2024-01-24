loadCookie()

function loadCookie() {
    let users = ["alex2000", "mariaAAA37"];
    for (const user of users) {
        User.users.push(JSON.parse(getCookie(user)));
    }
    console.log(User.users);
}

function checkForm() {
    let formLogin = login.value;
    let formPassword = password.value;
    for (const user of User.users) {
        console.log(user);
        if (user.login == formLogin && user.password == formPassword) {
            setCookie("login", user.login);
            setCookie("password", user.password);
            LogIn();
        }
    }
}

function LogIn() {
    window.location.href = "./";
}