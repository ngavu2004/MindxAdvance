

function singnup () {
    let name = document.getElementById("userName").value;
    let pass = document.getElementById("userPass").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let check = document.getElementById("check");
    let btn = document.getElementById("btn")
    if (name == "" || pass == "" || phone == "" || email == "") {
        check.innerText = "Please try again";
    } else {
        check.innerText = "Successfully Signed up";
    }
}
btn.addEventListener("click", singnup());