const signUp = document.querySelector(".signUp");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");
const pwd_format = document.querySelector(".pwd-format");
const termCond = document.querySelector(".accept");



// defining password format, it should contain Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

password.addEventListener('focusin', () => {
    pwd_format.style.display = "block";
    
    // checking if the password entered by the user respects the pattern (the regular expression written above)
    password.addEventListener('keyup', () => {
        if (passwordPattern.test(password.value)) {
            password.style.borderColor = "green";
            pwd_format.style.color = "green";
            pwd_format.style.background = "#fff";
            pwd_format.style.border = "1px solid green";
        } else {
            password.style.borderColor = "red";
            pwd_format.style.color = "red";
            pwd_format.style.background = "#fff";
            pwd_format.style.border = "1px solid red";
        }
    }) 
})

password.addEventListener('focusout', () => {
    pwd_format.style.display = "none";
})

confirmPassword.addEventListener('focusin', () =>{
    pwd_format.style.display = "block";

    // checking if the confirmed password respect the pattern and if it matches the password
    confirmPassword.addEventListener('keyup', () => {
        if (passwordPattern.test(confirmPassword.value) && password.value === confirmPassword.value) {
            confirmPassword.style.borderColor = "green";
            pwd_format.style.color = "green";
            pwd_format.style.background = "#fff";
            pwd_format.style.border = "1px solid green";
        } else {
            confirmPassword.style.borderColor = "red";
            pwd_format.style.color = "red";
            pwd_format.style.border = "1px solid red";
        }
    })
})

confirmPassword.addEventListener('focusout', () => {
    pwd_format.style.display = "none";  
})


termCond.addEventListener('change', () => {
    if (termCond.checked === true) {
        signUp.disabled = false;
    } else if (termCond.checked === false) {
        signUp.disabled = true;
    }
})