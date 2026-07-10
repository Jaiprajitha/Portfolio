 
/* =========================
   Typing Animation
========================= */


const typingText = document.getElementById("typing");


const roles = [

    "Data Analyst",

    "AI & Machine Learning Enthusiast",

    "Python Developer",

    "Data Visualization Specialist"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    let currentRole = roles[roleIndex];



    if(!deleting){


        typingText.textContent =
        currentRole.substring(0,charIndex++);



        if(charIndex > currentRole.length){


            deleting = true;


            setTimeout(typeEffect,1500);

            return;

        }


    }


    else{


        typingText.textContent =
        currentRole.substring(0,charIndex--);



        if(charIndex < 0){


            deleting = false;


            roleIndex++;


            if(roleIndex >= roles.length){

                roleIndex = 0;

            }


        }


    }



    setTimeout(typeEffect,100);

}



typeEffect();






/* =========================
   Mobile Menu Toggle
========================= */


const menuToggle =
document.getElementById("menu-toggle");


const navLinks =
document.getElementById("nav-links");



menuToggle.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});





/* Close menu after clicking link */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});






/* =========================
   Scroll Progress Bar
========================= */


window.addEventListener("scroll",()=>{


    let scrollTop =
    document.documentElement.scrollTop;



    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;



    let progress =
    (scrollTop / scrollHeight) * 100;



    document.getElementById("progress-bar")
    .style.width = progress + "%";



});
 
/* =========================
   EmailJS Configuration
========================= */


(function(){

    emailjs.init("YOUR_PUBLIC_KEY");

})();





const contactForm =
document.getElementById("contact-form");



contactForm.addEventListener("submit",function(e){


    e.preventDefault();



    emailjs.sendForm(

        "YOUR_SERVICE_ID",

        "YOUR_TEMPLATE_ID",

        this


    )

    .then(()=>{


        alert(
        "Message sent successfully!"
        );


        contactForm.reset();



    })


    .catch((error)=>{


        alert(
        "Failed to send message. Please try again."
        );


        console.log(error);



    });



});
