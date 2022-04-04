
const burgerBtn = document.querySelector(".burgerlines");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const logo = document.querySelector(".logo");
const rohan = document.querySelector(".rohan");
const container1 = document.querySelector(".container");
const about = document.querySelector(".h1about");
const aboutme = document.querySelector(".aboutme");
const servicebtn = document.querySelectorAll(".servicebtn");
const service1 = document.getElementById("service1");
const service2 = document.getElementById("service2");
const service3 = document.getElementById("service3");
var darkModeBtn = document.getElementById("modechangeimage");
var background = document.querySelector(".wholepage");
var homeBack = document.getElementById("home");
var aboutBack = document.getElementById("about");
var serviceBack = document.getElementById("services");
var portfolioBack = document.getElementById("portfolio");
var contactBack = document.getElementById("contact");
var aboutText = document.querySelector(".aboutme");
var h1About = document.querySelector(".h1about");
var contactText = document.querySelector(".contacttxt");
var servicesText = document.querySelectorAll(".serviceParagraph");








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

service1.addEventListener("click", ()=>{
    alert("This page is still under construction");
});
service2.addEventListener("click", ()=>{
    alert("This page is still under construction");
});
service3.addEventListener("click", ()=>{
    alert("This page is still under construction");
});




console.log("It is running");
console.log(darkModeBtn.src);


























darkModeBtn.addEventListener("click", function(){
    // darkModeBtn.src == "http://127.0.0.1:5500/img/freemoon.png" ? darkModeBtn.src = "http://127.0.0.1:5500/img/lightmode.png" : darkModeBtn.src = "http://127.0.0.1:5500/img/freemoon.png" ;
    if(darkModeBtn.src == "https://www.rohanthapa.com.np/img/lightmode.webp")
    {
        darkModeBtn.src = "https://www.rohanthapa.com.np/img/freemoon.png"
        darkModeBtn.style.backgroundColor = "grey";
        nav.style.background = "#000001";
        homeBack.style.backgroundColor = "#0F0E0E";   
        aboutBack.style.background = "#0F0E0E";
        aboutText.style.color = "#D3E4CD";
        h1About.style.color = "white";
        serviceBack.style.background = "#0F0F0F";
        portfolioBack.style.background = "#0F0F0F";
        contactBack.style.background = "#0F0F0F";
        contactText.style.color = "white";
        
       

    }
    else
    {
        darkModeBtn.src = "https://www.rohanthapa.com.np/img/lightmode.webp" ;
        darkModeBtn.style.backgroundColor = "#A6E3E9"; 
        nav.style.background = "linear-gradient(to right top,#CBF1F5, #A6E3E9)";
        homeBack.style.backgroundColor = "#E3FDFD";
        aboutBack.style.background = "linear-gradient(to top , #F6F6F6 ,#E3FDFD)";
        aboutText.style.color = "#1d3a4d";
        h1About.style.color = "#401a64";
        serviceBack.style.background = "linear-gradient(to top, #65C18C,#F6F6F6)";
        portfolioBack.style.background = "linear-gradient(to top, #619181, #65C18C)";
        contactBack.style.background = "linear-gradient(to top,#a065d6 , #619181)";
        contactText.style.color = "black";
    }
    
}
);
