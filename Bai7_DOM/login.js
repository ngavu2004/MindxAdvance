let account_email = "admin";
let account_password = "admin";
let btn = document.getElementById("btn")

let login = function (params) {
    let email = document.getElementById("userEmail").value;
    let pass = document.getElementById("userPass").value
    let check = document.getElementById("check")
    if (email == account_email && pass == account_password ) {
        check.innerText = "Ban da dang ky thanh cong"
    } else {
        check.innerText = "Please try again"
    }
}

btn.addEventListener("click",login)
