let viewport = document.querySelector('meta[name=viewport]');
 viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')

//  document.documentElement.style.setProperty('overflow', 'auto')
//  var metaViewport = document.querySelector('meta[name=viewport]')
//  metaViewport.setAttribute('content', 'height=' + initialHeight + 'px, width=device-width, initial-scale=1.0')

//  var metaViewport = document.querySelector('meta[name=viewport]')
//  metaViewport.setAttribute('content','width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')





const burgerBtn = document.querySelector(".burgerlines");
const navLinks = document.querySelector(".nav-links");
var navDarkModeMobile = document.querySelector(".nav-active");
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
var navAnchor = document.getElementsByTagName("a");
var burgerLines = document.querySelectorAll(".line");

//i got every single element lol 




//this is so easy !!

burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    burgerBtn.classList.toggle("toggle");

});

logo.addEventListener("click", () => {
    rohan.classList.toggle("logo-active");
});

about.addEventListener("click", () => {
    about.classList.toggle("h1about-active");
})

service1.addEventListener("click", () => {
    alert("This page is still under construction");
});
service2.addEventListener("click", () => {
    alert("This page is still under construction");
});
service3.addEventListener("click", () => {
    alert("This page is still under construction");
});




console.log("It is running");
console.log(darkModeBtn.src);

console.log(servicesText);

//for color change to white and black on darkmode on service paragraph
function textChange() {
    servicesText[0].style.color = "#e9edc9"; 
    servicesText[1].style.color = "#e9edc9";
    servicesText[2].style.color = "#e9edc9";

}
function textChangeBlack() {
    servicesText[0].style.color = "black";
    servicesText[1].style.color = "black";
    servicesText[2].style.color = "black";

}
//end of color change for service paragraph darkmode

//nav bar color change for darkmode
function navColorChange() {
    navAnchor[0].style.color = "white";
    navAnchor[1].style.color = "white";
    navAnchor[2].style.color = "white";
    navAnchor[3].style.color = "white";
    navAnchor[4].style.color = "white";
}
function navColorChangeBlack() {
    navAnchor[0].style.color = "rgb(50, 5, 165)";
    navAnchor[1].style.color = "rgb(50, 5, 165)";
    navAnchor[2].style.color = "rgb(50, 5, 165)";
    navAnchor[3].style.color = "rgb(50, 5, 165)";
    navAnchor[4].style.color = "rgb(50, 5, 165)";
}

// end of nav bar color change for darkmode
//to change the burger lines color in darkmode

function brugerChangeWhite(){
    burgerLines[0].style.backgroundColor = "white";
    burgerLines[1].style.backgroundColor = "white";
    burgerLines[2].style.backgroundColor = "white";
}
function brugerChangeBlack(){
    burgerLines[0].style.backgroundColor = "Black";
    burgerLines[1].style.backgroundColor = "Black";
    burgerLines[2].style.backgroundColor = "Black";
}

//end of burger lines darkmode change function


















//this is the function to change into darkmode

darkModeBtn.addEventListener("click", function () {
    // darkModeBtn.src == "http://127.0.0.1:5500/img/freemoon.png" ? darkModeBtn.src = "http://127.0.0.1:5500/img/lightmode.png" : darkModeBtn.src = "http://127.0.0.1:5500/img/freemoon.png" ;
    //if the image src is moon them the change happens
    if (darkModeBtn.src == "https://www.rohanthapa.com.np/img/freemoon.png") {
        darkModeBtn.src = "https://www.rohanthapa.com.np/img/lightmode.webp"
        darkModeBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        nav.style.background = "#000001";
        brugerChangeWhite();
        navColorChange(); //fucntion declared above
        navLinks.style.backgroundColor = "black";
        homeBack.style.backgroundColor = "#0F0E0E";
        aboutBack.style.background = "#0F0E0E";
        aboutText.style.color = "#D3E4CD";
        h1About.style.color = "white";
        serviceBack.style.background = "#0F0F0F";
        textChange(); //fucntion declared above
        portfolioBack.style.background = "#0F0F0F";
        contactBack.style.background = "#0F0F0F";
        contactText.style.color = "white";
        





    }
    //if the darkmode icons img is not moon then this happens
    else {
        darkModeBtn.src = "https://www.rohanthapa.com.np/img/freemoon.png";
        darkModeBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        nav.style.background = "linear-gradient(to right top,#CBF1F5, #A6E3E9)";
        brugerChangeBlack();
        navColorChangeBlack(); //fucntion declared above
        navLinks.style.backgroundColor = "#b9eaef";
        homeBack.style.backgroundColor = "#E3FDFD";
        aboutBack.style.background = "linear-gradient(to top , #F6F6F6 ,#E3FDFD)";
        aboutText.style.color = "#1d3a4d";
        h1About.style.color = "#401a64";
        serviceBack.style.background = "linear-gradient(to top, #65C18C,#F6F6F6)";
        textChangeBlack(); //service text color fucntion declared above
        portfolioBack.style.background = "linear-gradient(to top, #619181, #65C18C)";
        contactBack.style.background = "linear-gradient(to top,#a065d6 , #619181)";
        contactText.style.color = "black";
    }


}
    
);


//function for contact page
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thaparohan2019@gmail.com",
        Password : "64FC19CBE2A9DD1D7B971261321B462BF665",
        To : 'thaparohan2019@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Messege from Contact form",
        Body : "Name : " + document.getElementById("name").value
        + "<br> Email :" + document.getElementById("email").value
        + "<br> Phone No :" + document.getElementById("phone").value
        + "<br> Messege :" + document.getElementById("messege").value 
      
    }).then(
        message => alert( "Message sent successfully 😍")
    );
}


//for tilt like animation for portfolio section
VanillaTilt.init(document.querySelectorAll(".cards",),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare":1,
    gyroscopeMinAngleX:     -30,   
    gyroscopeMaxAngleX:     30,     
    gyroscopeMinAngleY:     -30,    
    gyroscopeMaxAngleY:     30,
});
VanillaTilt.init(document.querySelectorAll(".col",),{
    max: 25,
    speed: 300,
    glare: true,
    "max-glare":0.3,
    gyroscopeMinAngleX:     -30,   
    gyroscopeMaxAngleX:     30,     
    gyroscopeMinAngleY:     -30,    
    gyroscopeMaxAngleY:     30,

});





















































var i = 0;
setInterval(function () {

    console.log( i +"  Hi! This is Rohan Thapa. How are your Doing 😊❤️‍🩹.");
    
    i++;
}, 100);