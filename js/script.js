// Funcionalidade do carrossel
const controls = document.querySelectorAll('.control');

let currentItem = 0;

const items = document.querySelectorAll('.item');

const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        
        if(isLeft){
            currentItem -= 1;
        } else{
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItems - 1;
        }

        // console.log("control", isLeft, currentItem);

        items.forEach(item => item.classList.remove('current-item'));

        const scrollLeft = items[currentItem].offsetLeft - (window.innerWidth / 2 - items[currentItem].offsetWidth / 2);

        // Ajusta a posição de rolagem do carrossel
        document.querySelector('.gallery-wrapper').scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });

        // items[currentItem].scrollIntoView({
        //     inline: "center",
        //     behavior: "smooth"
        // })
    })
});


// NAVBAR RESPONSIVA
const btnMenu = document.getElementById("menu");
const menu = document.getElementById("navBarMenu")
const btnClose = document.getElementById("btnClose")
const links = document.querySelectorAll(".links") // todos os links do menu

// função abrir menu
function openMenu(){
    btnMenu.addEventListener("click", () => {
        menu.style.right = "0"
    })
}

document.addEventListener("DOMContentLoaded", openMenu()) // chama a func de abrir o menu

// função fechar menu no botão
function closeMenu(){
    btnClose.addEventListener("click", () => {
        menu.style.right = "-70%"
    })
}

document.addEventListener("DOMContentLoaded", closeMenu()) // chama a func de fechar o menu

function closeOnLinks(){
    for(link of links){
        link.addEventListener("click", () => {
            menu.style.right = "-70%"
        })
    }
}

document.addEventListener("DOMContentLoaded", closeOnLinks()) // chama a func de fechar o menu ao clicar em algun link
