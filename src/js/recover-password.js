// MENSAGEM APÓS O ENVIO DO NÚMERO CADASTRADO
function resendSMS(){
    const container = document.getElementById('input-container');
    const telInput = document.getElementById('tel-input');
    const message = document.getElementById('message');
    const sendButton = document.querySelector('button');
    const notReceive = `<a href="#">Não recebi o SMS, reenviar</a>`;

    message.innerHTML = `Caso o número ${telInput.value} exista em nossa base você receberá um link para redefinição de senha!`
    container.innerHTML = notReceive;
    sendButton.innerHTML = "Entrar";
}


// VALIDAÇÃO DO TELEFONE
function telValidation(){
    const forms = document.getElementById('registered-tel');
    const telInput = document.getElementById('tel-input');

    forms.addEventListener('submit', (e) =>{
        const firstTrhee = (telInput.value).slice(0, 3);

        if(!(telInput.value).match(/^\d+$/)){
            e.preventDefault();
            alert('Telefone inválido');
        } else if(firstTrhee != '119'){
            e.preventDefault();
            alert('Telefone inválido');
        } else{
            e.preventDefault();
            resendSMS();
        }        
    })
}

telValidation();