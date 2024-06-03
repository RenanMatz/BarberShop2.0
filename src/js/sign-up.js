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


// VALIDAÇÃO DO CADASTRO
function checkboxValidation(){
    const forms = document.getElementById("forms");
    const name = document.getElementById("name")
    const userName = document.getElementById("user-name");
    const tel = document.getElementById("telephone");
    const password = document.getElementById("password-input");
    const checkbox = document.getElementById("check-box");

    forms.addEventListener('submit', (e) =>{
        const firstThree = (tel.value).slice(0, 3);

        if(!((name.value).match(/^[A-Za-záéíóúâêôãõçÁÉÍÓÚ ]+$/))){
            e.preventDefault();
            alert("Nome inválido");
            name.focus();
        } else if((name.value).match(/[\s]$/) || (name.value).match(/^[\s]/) || (name.value).match(/[\s]{2}/)){
            e.preventDefault();
            alert("Nome inválido, cuidado com espaços no lugar errado");
            name.focus();
        } else if((userName.value).match(/[\s]+/)){
            e.preventDefault();
            alert('O nome de usuário não pode conter espaços');
            userName.focus();
        } else if(!(tel.value).match(/^\d+$/)){
            e.preventDefault();
            alert('Telefone inválido');
            tel.focus();
        } else if(!((tel.value).match(/^[1-9][0-9][9]/))){
            e.preventDefault();
            alert('Telefone inválido');
            tel.focus();
        } else if((tel.value).match(/(\d)\1{3}/)){
            e.preventDefault();
            alert('Telefone inválido');
            tel.focus();
        } else if(!((password.value).match(/[!@#$%&*_=º^{}()/\|?;:<>~,'"-]/)) || !((password.value).match(/[a-zA-Z]/)) || !((password.value).match(/[0-9]/))){
            e.preventDefault();
            alert('A senha deve conter letra, número e caractere especial');
            password.focus();
        } else if((password.value).match(/[\s]+/)){
            e.preventDefault();
            alert('A senha não pode conter espaços');
            password.focus();
        } else if(!checkbox.checked){
            e.preventDefault();
            alert("Para realizar o cadastro é preciso concordar com os termos de uso");
        }
        
    })
}

checkboxValidation();