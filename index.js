const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
    siebar = body.querySelector("nav");
    siebarToggle = body.querySelector(".siebar-toggle");

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
});

siebarToggle.addEventListener("click", () => {
    siebar.classList.toggle("close")
})