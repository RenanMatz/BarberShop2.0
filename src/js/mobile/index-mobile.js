// NAVBAR RESPONSIVA
const btnMenu = document.getElementById("menu");
const menu = document.getElementById("nav-bar-menu")
const closeButton = document.getElementById("close-btn")
const links = document.querySelectorAll(".links") // todos os links do menu

export function mobileOperation(){
    
    // função abrir menu
    function openMenu(){
        btnMenu.addEventListener("click", () => {
            menu.style.right = "0"
        })
    }

    openMenu(); // chama a func de abrir o menu

    // função fechar menu no botão
    function closeMenu(){
        closeButton.addEventListener("click", () => {
            menu.style.right = "-70%"
        })
    }

    closeMenu(); // chama a func de fechar o menu

    function closeOnLinks(){
        for(let link of links){
            link.addEventListener("click", () => {
                menu.style.right = "-70%"
            })
        }
    }

    closeOnLinks() // chama a func de fechar o menu ao clicar em algun link
}