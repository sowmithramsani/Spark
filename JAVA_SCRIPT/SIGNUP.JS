// Get references to the form elements
const fullNameInput = document.querySelector('input[name="fullname"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');
const signupButton = document.querySelector('.signup-box form a');

// Function to validate the form data
function validateForm() {
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (fullName === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false;
    }

    // Add additional validation logic as needed

    return true;
}

// Event listener for the signup button
signupButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        // Perform signup process here, e.g., send data to the server
        // You can add an AJAX request or any other logic for signup
        
        // For demonstration purposes, we'll just alert a success message
        alert('Signup successful!');
        
        // You can also redirect the user to a different page after successful signup
        // Example: window.location.href = 'success.html';
    }
});
