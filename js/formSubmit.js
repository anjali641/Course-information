const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {

e.preventDefault();

const data = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
message: document.getElementById("message").value
};

fetch("https://script.google.com/macros/s/AKfycbzZRfVrdyyx16qsa6GE18aZkqKVAl8qNX52qSnQv2X1tLLmZkZQl2-Twmz_1rX5Qi1_/exec", {
method: "POST",
mode: "no-cors",
body: JSON.stringify(data)
})
.then(() => {

document.getElementById("formSuccess").style.display = "block";

contactForm.reset();

});

});