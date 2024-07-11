document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const profileImages = document.querySelectorAll(".profileImage");

    items.forEach((item, index) => {
        const itemNumber = index + 1;
        item.style.backgroundImage = `url(./imgs/Miniatura/Mini-${itemNumber}.png)`;
    });

    profileImages.forEach((profileImage, index) => {
        const profileNumber = index + 1;
        profileImage.style.backgroundImage = `url(./imgs/Profile//profile-${profileNumber}.png)`;
    });
});