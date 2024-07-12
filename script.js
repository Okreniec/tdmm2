
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const portadaJuegos = document.querySelectorAll(".game");
    const profileImages = document.querySelectorAll(".profileImage");
    const imagesNoticias = document.querySelectorAll(".imageNoticia");

    items.forEach((item, index) => {
        const itemNumber = index + 1;
        item.style.backgroundImage = `url(./imgs/Miniatura/Mini-${itemNumber}.png)`;
    });

    profileImages.forEach((profileImage, index) => {
        const profileNumber = index + 1;
        profileImage.style.backgroundImage = `url(./imgs/Profile//profile-${profileNumber}.png)`;
    });

    portadaJuegos.forEach((game, index) => {
        const portadaNumber = index + 1;
        game.style.backgroundImage = `url(./imgs/portadaJuego//portada-${portadaNumber}.png)`;
    });

    imagesNoticias.forEach((imageNoticia, index) => {
        const profileNumber = index + 1;
        imageNoticia.style.backgroundImage = `url(./imgs/Juegos//articulo-${profileNumber}.png)`;
    });

    const btnAbrirModal = 
    document.querySelector("#btn-abrir-modal");
    const btnCerrarModal = 
    document.querySelector("#btn-cerrar-modal");
    const btnCerrarModal1 = 
    document.querySelector("#btn-cerrar-modal-1");
    document.querySelector("#modal");

    btnAbrirModal.addEventListener("click",()=>{
        modal.showModal();
    })

    btnCerrarModal.addEventListener("click",()=>{
        modal.close();
    })

    btnCerrarModal1.addEventListener("click",()=>{
        modal.close();
    })
});