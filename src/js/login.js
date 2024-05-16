// BOTÃO DE MOSTRAR A SENHA
function showPassword(){
    const btnPassword = document.querySelector("#i");
    const passwordInput = document.querySelector("#password-input");

    btnPassword.addEventListener("click", () =>{
        console.log(passwordInput)
        if(passwordInput.type === "password"){
            passwordInput.type = "text";
            btnPassword.classList.remove("fa-eye-slash");
            btnPassword.classList.add("fa-eye");
        } else{
            passwordInput.type = "password";
            btnPassword.classList.remove("fa-eye");
            btnPassword.classList.add("fa-eye-slash");
        }
    })
}

showPassword();