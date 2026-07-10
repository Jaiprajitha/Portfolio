/* =========================
   Portfolio JavaScript
   Jaiprijitha N
========================= */


/* =========================
   Mobile Navigation Toggle
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* =========================
   Close Mobile Menu
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(navMenu.classList.contains("active")){

            navMenu.classList.remove("active");

        }

    });

});


/* =========================
   Smooth Scrolling
========================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(event){

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if(section){

            section.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* =========================
   Sticky Header
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }
    else{

        header.classList.remove("sticky");

    }

});


/* =========================
   Typing Effect
========================= */

const text = [
    "AI ML Engineer",
    "Data Analyst",
    "IoT Research Analyst"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");


function typeEffect(){

    if(typingElement){

        if(charIndex < text[textIndex].length){

            typingElement.innerHTML += 
            text[textIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeEffect,100);

        }

        else{

            setTimeout(eraseEffect,1500);

        }

    }

}


function eraseEffect(){

    if(charIndex > 0){

        typingElement.innerHTML =
        text[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        textIndex++;

        if(textIndex >= text.length){

            textIndex = 0;

        }

        setTimeout(typeEffect,500);

    }

}


document.addEventListener(
    "DOMContentLoaded",
    typeEffect
);
 
/* =========================
   Scroll Reveal Animation
========================= */

const revealElements = document.querySelectorAll(
    ".project-card, .experience-card, .skill-card, .certificate-card"
);


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================
   Active Navigation Highlight
========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;


        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });



    navItems.forEach(link => {


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});



/* =========================
   Scroll To Top Button
========================= */


const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);



window.addEventListener("scroll", () => {


    if(window.scrollY > 400){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }


});



topButton.addEventListener("click", () => {


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



/* =========================
   Download Resume Button
========================= */


const resumeBtn = document.querySelector(".resume-btn");


if(resumeBtn){


    resumeBtn.addEventListener("click",()=>{


        alert(
            "Resume download started!"
        );


    });


}



/* =========================
   Current Year Footer
========================= */


const footerYear = document.querySelector("#year");


if(footerYear){


    footerYear.textContent =
    new Date().getFullYear();


}



/* =========================
   Contact Form Validation
========================= */


const contactForm = document.querySelector("#contact-form");


if(contactForm){


contactForm.addEventListener("submit",(event)=>{


    event.preventDefault();


    const name =
    document.querySelector("#name").value;


    const email =
    document.querySelector("#email").value;


    const message =
    document.querySelector("#message").value;



    if(
        name === "" ||
        email === "" ||
        message === ""
    ){

        alert(
            "Please fill all fields"
        );

    }

    else{

        alert(
            "Message sent successfully!"
        );


        contactForm.reset();

    }


});


}



/* =========================
   Page Loading Animation
========================= */


window.addEventListener(
    "load",
    ()=>{

        document.body.classList.add(
            "loaded"
        );

    }
);
