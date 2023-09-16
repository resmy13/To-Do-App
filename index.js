var username = document.getElementById('username');
var password = document.getElementById('password');
var erruser=document.getElementById('erruser');
var errpassword=document.getElementById('errpassword');


function validate() {
    if (username.value == "admin" && password.value == "12345") {
        alert("Validation Proper");
        return true;
    } else if (username.value =='' || password.value == '') {
        alert("The Fields Cannot be empty");
        return false;
    } else if (username.value !== "admin" && password.value == "12345") {
        erruser.innerHTML = "Wrong Username";
        alert("Enter a valid Username");
        return false;
    } else if (username.value =="admin" && password.value !== "12345") {
        errpassword.innerHTML = "Wrong Password";
        alert("Enter the correct Password");
        return false;
    } else {
        alert("Neither username nor password is correct.");
        return false;
    }
}
