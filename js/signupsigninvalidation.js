// Greeting message for the last signed up username
let lastSignedUpUsername = localStorage.getItem('signedUpUsername');
localStorage.removeItem('signedUpUsername');
const greeting = (person) => {
    const name = person ? person : '';
    return `Welcome ${name}`;
};
let usernameDisplay = document.getElementById('greetingDisplay');
if (usernameDisplay) {
    usernameDisplay.innerHTML = greeting(lastSignedUpUsername);
}
// Populate username input field with lastSignedUpUsername
document.getElementById('username').value = lastSignedUpUsername;
function validateUsername() {
    let username = document.getElementById('username');
    let usernameError = document.getElementById('username-error');
    let lettersNumbers = /[^A-Za-z0-9]/;
    if (username.value.length == 0) {
        usernameError.innerHTML = 'Username cannot be blank';
        return false;
    }
    else if (username.value.includes(' ')) {
        usernameError.innerHTML = 'Username cannot contain spaces';
        return false;
    }
    else if (username.value.match(lettersNumbers)) {
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
    else if (!email.value.match(emailRegex)) {
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
    let passwordConstraint = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/
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
        // Compare the passwords live while typing each character in the repeat password input field
        if ((password.value.substring(0, passwordRepeat.value.length)) != passwordRepeat.value) {
            passwordRepeatError.innerHTML = 'Passwords do not match';
        }
        else {
            passwordRepeatError.innerHTML = '';
        }
        return false;
    }
    else {
        passwordRepeatError.innerHTML = '';
        return true;
    }
}
function validateSignUpForm() {
    // To display error in the case when correct password is typed partially in the repeat password input field and sign up is clicked
    let passwordSignUp = document.getElementById('password');
    let passwordRepeatSignUp = document.getElementById('passwordrepeat');
    let passwordRepeatErrorSignUp = document.getElementById('password-repeat-error');
    let usernameSignUp = document.getElementById('username');
    if (passwordSignUp.value != passwordRepeatSignUp.value) {
        passwordRepeatErrorSignUp.innerHTML = 'Passwords do not match';
        return false;
    }
    if (!validateUsername() || !validateEmail() || !validatePassword() || !validatePasswordRepeat()) {
        return false;
    }
    else {
        // To display username after redirection to sign in page
        localStorage.setItem('signedUpUsername', usernameSignUp.value);
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
