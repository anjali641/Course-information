const form = document.getElementById('contactForm');

if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop submission for validation
        
        let isValid = true;

        // Get Inputs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');

        // Regex Patterns
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;

        // Reset Errors
        document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
        document.querySelectorAll('input, textarea').forEach(el => el.style.border = '1px solid #ddd');

        // Validate Name
        if(name.value.trim() === '') {
            showError('nameError', name, 'Name is required');
            isValid = false;
        }

        // Validate Email
        if(!emailPattern.test(email.value.trim())) {
            showError('emailError', email, 'Enter a valid email');
            isValid = false;
        }

        // Validate Phone
        if(!phonePattern.test(phone.value.trim())) {
            showError('phoneError', phone, 'Enter a valid 10-digit number');
            isValid = false;
        }

        // Validate Message
        if(message.value.trim() === '') {
            showError('messageError', message, 'Message cannot be empty');
            isValid = false;
        }

        if(isValid) {
            document.getElementById("formSuccess").style.display = "block";
form.reset();
        }
    });
}

function showError(elementId, inputElement, msg) {
    const errorSpan = document.getElementById(elementId);
    errorSpan.innerText = msg;
    errorSpan.style.display = 'block';
    inputElement.style.border = '1px solid red';
}