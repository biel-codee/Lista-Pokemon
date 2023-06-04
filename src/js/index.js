const btnChangeTheme = document.getElementById("btn-change-theme");
const body = document.querySelector("body");
const imgBtnChangeTheme = document.querySelector(".img-btn")

btnChangeTheme.addEventListener("click", () => {
    const darkModeIsActive = body.classList.contains("dark-mode");
    body.classList.toggle("dark-mode");

    if (darkModeIsActive) {
        imgBtnChangeTheme.setAttribute("src", "src/imagens/sun.png")
    
    } else {
        imgBtnChangeTheme.setAttribute("src", "src/imagens/moon.png")
    }
});