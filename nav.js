const openMenuButton = document.querySelector(".menu-button")
const menuFadeIn = document.querySelector(".menu")

let toggleMenu = false;

openMenuButton.addEventListener("click", () => {
    if(!toggleMenu) {
        openMenuButton.classList.add("opened");
        menuFadeIn.classList.add("visible");
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        toggleMenu = true;
    }
    else {
        openMenuButton.classList.remove("opened");
        menuFadeIn.classList.remove("visible");
        document.getElementsByTagName("body")[0].style.overflow = "overlay";
        toggleMenu = false;
    }
});