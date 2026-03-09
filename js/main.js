// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    // Animate hamburger to X
    hamburger.classList.toggle('toggle');
});

// Close menu when clicking a link (Mobile UX)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});
const education = document.getElementById("education");

if (education) {

education.addEventListener("change", function(){

document.getElementById("schoolClass").style.display="none";
document.getElementById("interClass").style.display="none";
document.getElementById("gradSubject").style.display="none";
document.getElementById("masterSubject").style.display="none";
document.getElementById("otherField").style.display="none";

if(this.value==="school"){
document.getElementById("schoolClass").style.display="block";
}

if(this.value==="inter"){
document.getElementById("interClass").style.display="block";
}

if(this.value==="graduation"){
document.getElementById("gradSubject").style.display="block";
}

if(this.value==="masters"){
document.getElementById("masterSubject").style.display="block";
}

if(this.value==="other"){
document.getElementById("otherField").style.display="block";
}

});
}