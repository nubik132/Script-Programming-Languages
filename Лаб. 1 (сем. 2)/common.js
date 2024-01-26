let loginHtml = document.querySelector(".login");
if (getCookie("login") != undefined) {
    loginHtml.style.display = "none"
}