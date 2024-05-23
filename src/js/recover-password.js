// MENSAGEM APÓS O ENVIO DO NÚMERO CADASTRADO
function resendSMS(){
    const container = document.querySelector('.input-container');
    const telInput = document.getElementById('phone-number');
    const message = document.querySelector('.change-password-message');
    const sendButton = document.querySelector('.send-button');
    const notReceive = `<a href="#">Não recebi o SMS, reenviar</a>`;
    const returnButton = `<a href="../login.html" id="return-button">Entrar</a>`

    message.innerHTML = `Caso o número ${telInput.value} exista em nossa base você receberá um link para redefinição de senha!`
    container.innerHTML = notReceive;
    sendButton.innerHTML = returnButton;
}


// VALIDAÇÃO DO TELEFONE
function telValidation(){
    const forms = document.querySelector('.registered-number-form');
    const phoneNumber = document.getElementById('phone-number');

    forms.addEventListener('submit', (e) =>{

        if(!(phoneNumber.value).match(/^\d+$/)){
            e.preventDefault();
            alert('Telefone inválido');
        } else if(!((phoneNumber.value).match(/^[1-9][0-9][9]/))){
            e.preventDefault();
            alert('Telefone inválido');
        } else if((phoneNumber.value).match(/(\d)\1{3}/)){
            e.preventDefault();
            alert('Telefone inválido');
        } else{
            e.preventDefault();
            resendSMS();
        }       
    })
}

telValidation();