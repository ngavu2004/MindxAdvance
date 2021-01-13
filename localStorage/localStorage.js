function signUp() {
    username = document.getElementById("username").value;
    pass = document.getElementById("pass").value;
    email = document.getElementById("email").value;
    // message = document.getElementById("message");

    let listPassword = [];
    let listNames = [];
    let listEmails = [];

    if (localStorage.getItem("passwords") !== null) {
        listPassword = JSON.parse(localStorage.getItem("passwords"));
        listNames = JSON.parse(localStorage.getItem("names"));
        listEmails = JSON.parse(localStorage.getItem("emails"));
        if (listNames.indexOf(username)==-1 && listEmails.indexOf(email)==-1 && email.indexOf("@gmail.com" !=-1)) {
            listPassword.push(pass);
            listNames.push(username);
            listEmails.push(email);
            document.getElementById("message").innerHTML = "Successfully registered";
            setTimeout(() => { document.getElementById("signUp").style.visibility = "Hidden" }, 1000);
            setTimeout(() => { document.getElementById("signIn").style.visibility = "visible" }, 1000);
        }
        else {
            console.log("Register error");
            return;
        }
    }
    else {
        if (email.indexOf("@gmail.com") !=-1) {
            listPassword.push(pass);
            listNames.push(username);
            listEmails.push(email);
            document.getElementById("message").innerHTML = "Successfully registered!";
            console.log("Success");
            setTimeout(() => { document.getElementById("signUp").style.visibility = "Hidden" }, 1000);
            setTimeout(() => { document.getElementById("signIn").style.visibility = "visible" }, 1000);
        } else {
            console.log("Register error");
            return;
        }
        
    }
    
    localStorage.setItem("names",JSON.stringify(listNames));
    localStorage.setItem("passwords",JSON.stringify(listPassword));
    localStorage.setItem("emails", JSON.stringify(listEmails));

}

function signIn() {
    let username = document.getElementById("name").value;
    let pass = document.getElementById("password").value;
    let email = document.getElementById("mail").value;
    
    let listNames = JSON.parse(localStorage.getItem("names"));
    let listPassword = JSON.parse(localStorage.getItem("passwords"));
    let listEmails = JSON.parse(localStorage.getItem("emails"));
    let index = listNames.indexOf(username);

    if (listPassword[index] == pass && listEmails[index] == email) {
        localStorage.setItem("recentUser", index)
        document.getElementById("logInMessage").innerHTML = "Successfully logged in!";
        setTimeout(() => { location.replace("bai6.html") }, 2000);
    } else {
        document.getElementById("logInMessage").innerHTML = "Log in failed";
    }
    
}


