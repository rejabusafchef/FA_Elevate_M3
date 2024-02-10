function validateUsername() {
    let usernameError = document.getElementById('username-error');
    let username = document.getElementById('username');
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (username.value.length == 0) {
        usernameError.innerHTML = 'Username cannot be blank';
        return false;
    }
    else if (username.value.includes(' ')) {
        usernameError.innerHTML = 'Username cannot contain spaces';
        return false;
    }
    else if(username.value.match(specialChars)){
        usernameError.innerHTML = 'Username cannot contain special characters';
        return false;
    }
    else if ((username.value.length < 8) || (username.value.length > 20)) {
        usernameError.innerHTML = 'Username should be between 8 and 20 characters';
        return false;
    }
    else {
        usernameError.innerHTML = '';
        return true;
    }
}
function validateEmail() {
    let emailError = document.getElementById('email-error');
    let email = document.getElementById('email');
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.value.length == 0) {
        emailError.innerHTML = 'Email address cannot be blank';
        return false;
    }
    else if (email.value.includes(' ')) {
        emailError.innerHTML = 'Email address cannot contain spaces';
        return false;
    }
    else if(!email.value.match(emailRegex)){
        emailError.innerHTML = 'Email address is not valid';
        return false;
    }
    else if ((email.value.length < 6) || (email.value.length > 60)) {
        emailError.innerHTML = 'Email address should be between 6 and 60 characters';
        return false;
    }
    else {
        emailError.innerHTML = '';
        return true;
    }
}
function validatePassword() {
    let passwordError = document.getElementById('password-error');
    let password = document.getElementById('password');
    let passwordConstraint = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if (password.value.includes(' ')) {
        passwordError.innerHTML = 'Password cannot contain spaces';
        return false;
    }
    else if (password.value.length == 0) {
        passwordError.innerHTML = 'Password cannot be blank';
        return false;
    }
    else if (!password.value.match(passwordConstraint)) {
        passwordError.innerHTML = 'Password should contain at least one letter, one number and one special character';
        return false;
    }
    else if ((password.value.length < 8) || (password.value.length > 20)) {
        passwordError.innerHTML = 'Password should be between 8 and 20 characters';
        return false;
    }
    else {
        passwordError.innerHTML = '';
        return true;
    }
}
function validatePasswordRepeat() {
    let passwordRepeatError = document.getElementById('password-repeat-error');
    let passwordRepeat = document.getElementById('passwordrepeat');
    if (password.value != passwordRepeat.value) {
        passwordRepeatError.innerHTML = 'Passwords do not match';
        return false;
    }
    else {
        passwordRepeatError.innerHTML = '';
        return true;
    }
}
function validateSignUpForm() {
    if (!validateUsername() || !validateEmail() || !validatePassword() || !validatePasswordRepeat()) {
        return false;
    }
    else {
        return true;
    }
}
function validateSignInForm() {
    if (!validateUsername() || !validatePassword()) {
        return false;
    }
    else {
        return true;
    }
}
