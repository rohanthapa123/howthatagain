
const burgerBtn = document.querySelector(".burgerlines");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const logo = document.querySelector(".logo");
const rohan = document.querySelector(".rohan");
const container1 = document.querySelector(".container");
const about = document.querySelector(".h1about");
const aboutme = document.querySelector(".aboutme");

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

about.addEventListener("click", ()=>{
    about.classList.toggle("h1about-active");
})







