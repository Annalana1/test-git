const iconBtn = document.querySelector(".header__toggle")
const navMenu = document.querySelector(".header-nav")

iconBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
}
)

document.querySelectorAll(".header-nav-list__lnk").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}))