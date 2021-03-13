const header = document.querySelector("header")
const h1 = document.querySelector('h1')
let image = true;
let title = true;

const changeImage = () => {
    image = !image;
    title = !title;
    header.style.backgroundImage = image ? "url(ship.jpg)" : "url(lighthouse.jpg)";
    h1.textContent = title ? "Statek" : "Latarnia"
}

header.addEventListener("click", changeImage)
