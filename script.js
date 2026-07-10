const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("show");

}

});

});

// First section visible on load

window.dispatchEvent(new Event("scroll"));
