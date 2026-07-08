// ===================================
// JAIPRIJITHA N PORTFOLIO JAVASCRIPT
// ===================================


// ================================
// Mobile Menu Toggle
// ================================


const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {


    navLinks.classList.toggle("active");


    if(navLinks.classList.contains("active")){

        menuToggle.innerHTML = "✕";

    }

    else{

        menuToggle.innerHTML = "☰";

    }


});



// ================================
// Close Menu After Click
// ================================


const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(item => {


    item.addEventListener("click",()=>{


        navLinks.classList.remove("active");

        menuToggle.innerHTML="☰";


    });


});




// ================================
// Smooth Scrolling
// ================================


document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click",function(e){


        e.preventDefault();


        const section =
        document.querySelector(
            this.getAttribute("href")
        );


        if(section){


            section.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});




// ================================
// Typing Animation
// ================================


const typingText =
[
    "Data Analyst",
    "AI ML Engineer",
    "Research Analyst"
];


const typing =
document.getElementById("typing");


let textIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    let currentText =
    typingText[textIndex];



    if(!deleting){


        typing.innerHTML =
        currentText.substring(0,charIndex+1);


        charIndex++;


        if(charIndex === currentText.length){


            deleting=true;


            setTimeout(typeEffect,1500);


            return;


        }


    }

    else{


        typing.innerHTML =
        currentText.substring(0,charIndex-1);


        charIndex--;


        if(charIndex===0){


            deleting=false;


            textIndex++;


            if(textIndex >= typingText.length){

                textIndex=0;

            }


        }


    }



    setTimeout(typeEffect,100);


}



typeEffect();





// ================================
// Scroll Progress Bar
// ================================


window.addEventListener("scroll",()=>{


    const scrollTop =
    document.documentElement.scrollTop;


    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;



    const progress =
    (scrollTop / height) * 100;



    document.getElementById(
        "progress-bar"
    ).style.width =
    progress + "%";


});


// ================================
// Fade In Animation On Scroll
// ================================


const fadeElements =
document.querySelectorAll(".fade");



function revealOnScroll(){


    fadeElements.forEach(element=>{


        const position =
        element.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){


            element.classList.add("show");


        }


    });


}



window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();





// ================================
// Active Navbar Highlight
// ================================


const sections =
document.querySelectorAll("section");


const navLinksList =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current = "";



    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;



        if(window.scrollY >= sectionTop){


            current =
            section.getAttribute("id");


        }


    });



    navLinksList.forEach(link=>{


        link.classList.remove("active");



        if(
            link.getAttribute("href")
            === "#" + current
        ){


            link.classList.add("active");


        }


    });



});





// ================================
// EmailJS Contact Form
// ================================



emailjs.init(
    "9QF9j-sJ8HgXwVVSF"
);



const contactForm =
document.getElementById("contact-form");



if(contactForm){


contactForm.addEventListener(
"submit",
function(event){


    event.preventDefault();



    emailjs.sendForm(

        "service_g6v935l",

        "template_0nwv5ld",

        this


    )

    .then(()=>{


        alert(
            "Message Sent Successfully!"
        );


        contactForm.reset();


    })



    .catch(error=>{


        alert(
            "Message Sending Failed!"
        );


        console.log(error);


    });



});


}





// ================================
// Footer Dynamic Year
// ================================


const footer =
document.querySelector("footer p");



if(footer){


footer.innerHTML =
`© ${new Date().getFullYear()} JAIPRIJITHA N | Data Analyst Portfolio`;


}





// ================================
// Console Message
// ================================


console.log(
"JAIPRIJITHA Portfolio Loaded Successfully 🚀"
);
