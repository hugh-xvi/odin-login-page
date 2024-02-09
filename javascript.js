pwd = document.querySelector("#pwd");
confirmpwd = document.querySelector("#confirm_pwd");
passwordVal = document.querySelector(".password-val");

console.log(pwd, confirm_pwd);

pwd.addEventListener('input',match);
confirmpwd.addEventListener('input',match);

function match (){
    let checkPass= pwd.value;
    let confirmPass= confirmpwd.value;
    if (checkPass && confirmPass){
        if(checkPass !== confirmPass){
            passwordVal.textContent = "* Passwords do not match";
            pwd.setCustomValidity("Invalid field.");
            confirmpwd.setCustomValidity("Invalid field.");
        } else {
            passwordVal.textContent = "";
            pwd.setCustomValidity("");
            confirmpwd.setCustomValidity("");
        }
    }

    else {
        passwordVal.textContent = "";
        pwd.setCustomValidity("");
        confirmpwd.setCustomValidity("");
    }
}
