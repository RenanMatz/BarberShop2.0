// BOTÃO DE MOSTRAR A SENHA
function showPassword(){
    const btnSeePassword = document.querySelector("#eye1");
    const passwordInput = document.querySelector("#new-password");  

    btnSeePassword.addEventListener("click", () =>{
        if(passwordInput.type === "password"){
            passwordInput.type = "text";
            btnSeePassword.classList.remove("fa-eye-slash");
            btnSeePassword.classList.add("fa-eye");
        } else{
            passwordInput.type = "password";
            btnSeePassword.classList.remove("fa-eye");
            btnSeePassword.classList.add("fa-eye-slash");
        }
    })

    // Segundo botão... antes de você me jugar eu tentei fazer com os dois botões e inputs ao mesmo tempo com "for of", mas não deu certo ent vamos desse jeito msm T_T
    const btnSeePassword2 = document.querySelector("#eye2");
    const passwordInput2 = document.querySelector("#confirm-password");

    btnSeePassword2.addEventListener("click", () =>{
        if(passwordInput2.type === "password"){
            passwordInput2.type = "text";
            btnSeePassword2.classList.remove("fa-eye-slash");
            btnSeePassword2.classList.add("fa-eye");
        } else{
            passwordInput2.type = "password";
            btnSeePassword2.classList.remove("fa-eye");
            btnSeePassword2.classList.add("fa-eye-slash");
        }
    })
}

showPassword();


// VALIDAÇÃO DAS SENHAS
function passwordValidation(){
    const forms = document.querySelector('.password-redefine-form');
    const newPassword = document.querySelector("#new-password");  
    const confirmedPassword = document.querySelector("#confirm-password");
    
    forms.addEventListener("submit", (e) =>{
        
        if(!((newPassword.value).match(/[!@#$%&*_=º^{}()/\|?;:<>~,'"-]/)) || !((newPassword.value).match(/[a-zA-Z]/)) || !((newPassword.value).match(/[0-9]/))){
            e.preventDefault();
            alert('A senha deve conter letra, número e caractere especial');
            newPassword.focus();
        } else if((newPassword.value).match(/[\s]+/)){
            e.preventDefault();
            alert('A senha não pode conter espaços');
            newPassword.focus();
        } else if(newPassword.value != confirmedPassword.value){
            e.preventDefault();
            alert('As senhas não estão iguais');
            confirmedPassword.focus();
        }
    })
}

passwordValidation();


// Aplicar a animção nos campos de entrada
function toggleAnimation(){
    const newPassword = document.querySelector('#new-password');
    const confirmedPassword = document.querySelector('#confirm-password');
    const newPasswordLabel = document.querySelector('#new-password-label');
    const confirmedPasswordLabel = document.querySelector('#confirmed-password-label');

    newPassword.addEventListener("focus", () =>{
        newPasswordLabel.classList.remove('label');
        newPasswordLabel.classList.add('label-top');
    })

    newPassword.addEventListener("blur", () =>{
        if(newPassword.value === ""){
            newPasswordLabel.classList.remove('label-top');
            newPasswordLabel.classList.add('label');
        }
    })

    confirmedPassword.addEventListener("focus", () =>{
        confirmedPasswordLabel.classList.remove('label');
        confirmedPasswordLabel.classList.add('label-top');
    })

    confirmedPassword.addEventListener("blur", () =>{
        if(confirmedPassword.value === ""){
            confirmedPasswordLabel.classList.remove('label-top');
            confirmedPasswordLabel.classList.add('label');
        }
    })
}

toggleAnimation();