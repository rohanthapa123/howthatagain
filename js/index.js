
const burgerBtn = document.querySelector(".burgerlines");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const logo = document.querySelector(".logo");
const rohan = document.querySelector(".rohan");

burgerBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("nav-active");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    burgerBtn.classList.toggle("toggle");
    
});

logo.addEventListener("click", ()=>{
    rohan.classList.toggle("logo-active");
});








