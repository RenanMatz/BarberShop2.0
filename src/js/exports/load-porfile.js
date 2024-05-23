export function loadProfile(){
    const profileBallonContainer = document.getElementById('icons');
    const subMenuStructure = 
    `
    <img src="../img/carouselImgs/hairCut11.jpg" alt="foto de usuário" class="user-pic">

    <div class="sub-menu-wrap" id="subMenu">
        <div class="sub-menu">
        <div class="user-info">
            <img src="../img/carouselImgs/hairCut11.jpg" alt="foto de usuário">
            <h3>Danilo Rocha</h3>
        </div>
        <hr>

        <a href="./user-profile.html" class="sub-menu-link">
            <img src="../img/profile.png" alt="ícone de perfil">
            <p>Editar Perfil</p>
            <span>></span>
        </a>
        <a href="./terms-of-use.html" class="sub-menu-link">
            <img src="../img/help.png" alt="ícone de ajuda dos sites (help)">
            <p>Ajuda</p>
            <span>></span>
        </a>
        <a href="#" class="sub-menu-link">
            <img src="../img/logout.png" alt="ícone de logout">
            <p>Sair</p>
            <span>></span>
        </a>
        </div>
    </div>
    `
    profileBallonContainer.innerHTML = subMenuStructure;
}

export function toggleMenu(){
    const subMenu = document.getElementById("subMenu");
    const userPic = document.querySelector(".user-pic");
    
    userPic.addEventListener("click", () =>{
        subMenu.classList.toggle("open-menu");
    })
}