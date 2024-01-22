document.addEventListener("DOMContentLoaded", function () {
   
    var form = document.querySelector('form');

     
    form.addEventListener('submit', function (event) {
         
        event.preventDefault();

        
        clearErrorMessages();

        
        if (validateForm()) {
             
            handleFormSubmission();
        }
    });

    function validateForm() {
         
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var subjectInput = document.getElementById('subject');
        var messageInput = document.getElementById('message');

        var isValid = true;

        if (nameInput.value.trim() === '') {
            displayErrorMessage(nameInput, 'Please enter your name.');
            isValid = false;
        }

        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
            displayErrorMessage(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }

        if (subjectInput.value.trim() === '') {
            displayErrorMessage(subjectInput, 'Please enter Your Moboile Number.');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            displayErrorMessage(messageInput, 'Please enter your message.');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
         
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayErrorMessage(inputElement, message) {
         
        var errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        errorMessage.style.color = 'red'; 
        
        inputElement.parentNode.appendChild(errorMessage);

        
        inputElement.style.borderColor = 'red';
    }

    function clearErrorMessages() {
        
        var errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (errorMessage) {
            errorMessage.parentNode.removeChild(errorMessage);
        });

        var formInputs = document.querySelectorAll('.form-control');
        formInputs.forEach(function (input) {
            input.style.borderColor = '';
        });
    }

    function handleFormSubmission() {
        
        var formData = new FormData(form);
 
        setTimeout(function () {
            alert('Form submitted successfully!');
             
            form.reset();
        }, 1000); 
    }
});