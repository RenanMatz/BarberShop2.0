// Limpa o campo quando o user clicar no "x"
function cleanValue(){
    const deleteButton = document.querySelector('i');
    const secondDeleteButton = document.getElementById('second-delete-button');
    const fullnameInput = document.getElementById('full-name');
    const usernameInput = document.getElementById('user-name');

    deleteButton.addEventListener('click', () =>{
        fullnameInput.value = "";
    })

    secondDeleteButton.addEventListener("click", () =>{
        usernameInput.value = "";
    })
}

cleanValue();


// Aplica a animação dependendo do valor do campo (se estiver vazio)
function toggleLabel(){
    const fullnameInput = document.getElementById('full-name');
    const usernameInput = document.getElementById('user-name');
    const deleteButton = document.querySelector('i');
    const secondDeleteButton = document.getElementById('second-delete-button');
    const fullNameLabel = document.getElementById('full-name-label');
    const userNameLabel = document.getElementById('user-name-label');

    // Só para a label de full name
    deleteButton.addEventListener("click", () =>{
        fullNameLabel.classList.remove('input-description')
        fullNameLabel.classList.add('toggle-label')
    })

    fullnameInput.addEventListener('focus', () =>{
        if(fullnameInput.value === ""){
            fullNameLabel.classList.remove('toggle-label');
            fullNameLabel.classList.add('input-description');
        }
    })

    fullnameInput.addEventListener("blur", () =>{
        if(fullnameInput.value === ""){
            fullNameLabel.classList.remove('input-description')
            fullNameLabel.classList.add('toggle-label')
        }
    })

    // Label de user name
    secondDeleteButton.addEventListener("click", () =>{
        userNameLabel.classList.remove('input-description');
        userNameLabel.classList.add('toggle-label');
    })

    usernameInput.addEventListener("focus", () =>{
        if(usernameInput.value === ""){
            userNameLabel.classList.remove('toggle-label');
            userNameLabel.classList.add('input-description');
        }
    })

    usernameInput.addEventListener("blur", () =>{
        if(usernameInput.value === ""){
            userNameLabel.classList.remove('input-description');
            userNameLabel.classList.add('toggle-label'); 
        }
    })
}

toggleLabel();


// Validação dos campos nome e nome de usuário
function updateValidation(){
    const forms = document.querySelector('.personal-data');
    const name = document.getElementById('full-name');
    const userName = document.getElementById('user-name');

    forms.addEventListener('submit', (e) =>{
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
        }
    })
}

updateValidation()