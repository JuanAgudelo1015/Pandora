const d = document;
function validatePasswords(){
    const $registerButton = d.getElementById('register-button');
    const $errorMessage = d.getElementById('error-message');

    $registerButton.addEventListener('click', (e) => {
        e.preventDefault()
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
        const $password = d.getElementById('password').value;
        console.log($password)

        if (regexPassword.test($password)){
            const $passwordRepeat = d.getElementById('password-repeat').value;
            console.log($passwordRepeat);

            if ($passwordRepeat === $password){
                $errorMessage.style.display = 'none'
                console.log("The password if match");
                return true;
            } else {
                $errorMessage.innerText = "Password do not match, try again";
                $errorMessage.style.display = 'block';
                console.log("THe password do not match, try again")
                return false;
            }
        } else {
            console.log("hazlo coincidir con el formato de contraseña")
        }
    })
}

validatePasswords()
