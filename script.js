// ================================
// Portfolio JavaScript
// JAIPRIJITHA N
// Data Analyst | AI & ML Engineer
// ================================


// ================================
// Mobile Navigation
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuToggle.innerHTML="✕";

    }
    else{

        menuToggle.innerHTML="☰";

    }

});


// Close menu after clicking link

navItems.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuToggle.innerHTML="☰";

    });

});


// Close menu outside click

document.addEventListener("click",(event)=>{

    const insideMenu = navLinks.contains(event.target);

    const clickedButton = menuToggle.contains(event.target);


    if(!insideMenu && !clickedButton){

        navLinks.classList.remove("active");

        menuToggle.innerHTML="☰";

    }

});



// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){

        e.preventDefault();


        const target=document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});



// ================================
// Typing Effect
// ================================

const roles=[

    "Data Analyst",

    "AI & ML Engineer",

    "Python Developer",

    "Machine Learning Enthusiast"

];


const typing=document.getElementById("typing");


let roleIndex=0;

let charIndex=0;

let deleting=false;



function typingEffect(){


    let currentRole=roles[roleIndex];


    if(!deleting){


        typing.textContent=
        currentRole.substring(0,charIndex+1);


        charIndex++;


        if(charIndex===currentRole.length){


            deleting=true;


            setTimeout(typingEffect,1200);

            return;

        }


    }

    else{


        typing.textContent=
        currentRole.substring(0,charIndex-1);


        charIndex--;


        if(charIndex===0){


            deleting=false;


            roleIndex++;


            if(roleIndex===roles.length){

                roleIndex=0;

            }


        }


    }


    setTimeout(

        typingEffect,

        deleting ? 60 : 120

    );


}


typingEffect();


// ================================
// Scroll Progress Bar
// ================================


window.addEventListener("scroll",()=>{


    const scrollTop=document.documentElement.scrollTop;


    const height=

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;



    const progress=(scrollTop/height)*100;



    document.getElementById("progress-bar")
    .style.width=progress+"%";


});
 
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