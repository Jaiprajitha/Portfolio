// ======================================
// Mobile Menu
// ======================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML='<i class="fas fa-times"></i>';
    }
    else{
        menuToggle.innerHTML='<i class="fas fa-bars"></i>';
    }

});

// ======================================
// Close Menu After Click
// ======================================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuToggle.innerHTML='<i class="fas fa-bars"></i>';

    });

});


// ======================================
// Typing Effect
// ======================================

const words=[

    "Data Analyst",

    "AI & ML Engineer",

    "Python Developer",

    "Power BI Developer"

];

let wordIndex=0;
let charIndex=0;
let isDeleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

    const currentWord=words[wordIndex];

    if(isDeleting){

        typing.textContent=currentWord.substring(0,charIndex--);

    }

    else{

        typing.textContent=currentWord.substring(0,charIndex++);

    }

    let speed=120;

    if(!isDeleting && charIndex===currentWord.length+1){

        speed=1500;

        isDeleting=true;

    }

    if(isDeleting && charIndex===0){

        isDeleting=false;

        wordIndex=(wordIndex+1)%words.length;

    }

    setTimeout(typeEffect,isDeleting?60:speed);

}

typeEffect();


// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ======================================
// Scroll Progress Bar
// ======================================

window.addEventListener("scroll",()=>{

    const winScroll=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const scrolled=(winScroll/height)*100;

    document.getElementById("progress-bar").style.width=scrolled+"%";

});


// ======================================
// Fade Animation
// ======================================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});


// ======================================
// Active Navigation
// ======================================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ======================================
// EmailJS
// ======================================

emailjs.init("YOUR_PUBLIC_KEY");

const form=document.getElementById("contact-form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    emailjs.sendForm(

        "YOUR_SERVICE_ID",

        "YOUR_TEMPLATE_ID",

        this

    ).then(()=>{

        alert("Message Sent Successfully!");

        form.reset();

    }).catch((error)=>{

        alert("Message Failed!");

        console.log(error);

    });

});


// ======================================
// Console Message
// ======================================

console.log("Portfolio Loaded Successfully 🚀");
