
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);
function navToggle() {
navToggler.classList.toggle("active");
const nav = document.querySelector(".nav");
nav.classList.toggle ("open");
if(nav.classList.contains ("open")) {
nav.style.maxHeight = nav.scrollHeight + "px";
}
else{
nav.removeAttribute("style");
}
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});