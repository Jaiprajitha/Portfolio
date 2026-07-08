// ================================
// Portfolio JavaScript
// ================================

// Select Elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// ================================
// Open / Close Mobile Menu
// ================================

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});

// ================================
// Close Menu After Clicking a Link
// ================================

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});

// ================================
// Close Menu When Clicking Outside
// ================================

document.addEventListener("click", (event) => {

    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnMenu = menuToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnMenu) {

        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";

    }

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

console.log("Portfolio Loaded Successfully!");

// ================================
// job title typing effect
// ================================

const text = "Full Stack Java Developer";
const typing = document.getElementById("typing");

let index = 0;

function typeEffect(){

    if(index < text.length){
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect,100);
    }
}
typeEffect();

window.addEventListener("scroll",()=>{

    const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progress=(window.scrollY/totalHeight)*100;

    document.getElementById("progress-bar").style.width=progress+"%";

});

/* fade in effect for elements with class "fade" */

const fadeElements=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

    fadeElements.forEach(element=>{

        const position=element.getBoundingClientRect().top;

        const screenHeight=window.innerHeight;

        if(position<screenHeight-100){

            element.classList.add("show");

        }

    });

});

emailjs.init("9QF9j-sJ8HgXwVVSF");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_g6v935l",
        "template_0nwv5ld",
        this
    ).then(function(){

        alert("Message Sent Successfully!");

        form.reset();

    }).catch(function(error){

        alert("Failed to Send Message");

        console.log(error);

    });

});
