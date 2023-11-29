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


// Modo Claro
const btnLight = document.getElementById("btnLight");
const target = document.querySelectorAll("[data-white='true']");

function lightMode(){
    btnLight.addEventListener("click", () => {
        target.style.backgroundColor = "white";
    });
}

document.addEventListener("DOMContentLoaded", lightMode())
