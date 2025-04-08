/*Name: Maria Liendo
  File: homework2.js
  Date Created: 2025-02-026
  Date Updated: 2025-02-028
  Purpose: Redisplay/validate data from a form*/

// Function to review the form and trigger real-time validation
function reviewForm() {
    // Trigger real-time validation for the name fields
    validateFirstName(document.getElementById("first_name"));
    validateMiddleName(document.getElementById("middle_name"));
    validateLastName(document.getElementById("last_name"));
    validateEmail(document.getElementById("email"));
    validatePhone(document.getElementById("phone_number"));

    // Collect form values
    const firstName = document.getElementById("first_name").value;
    const middleName = document.getElementById("middle_name").value;
    const lastName = document.getElementById("last_name").value;
    const dob = document.getElementById("dob").value;
    const ssn = document.getElementById("ssn").value;
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("phone_number").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;
    const symptoms = document.getElementById("symptoms").value;
    const healthLevel = document.getElementById("health").value;

    let gender = getSelectedGender();
    const fullAddress = `${address1}, ${address2}, ${city}, ${state} ${zip}`;
    updateReviewSection(firstName, lastName, dob, ssn, gender, fullAddress, email, phone_number, symptoms, healthLevel);

    // Show the review section
    document.getElementById("review-section").style.display = 'block';
  
// Validate First Name
function validateFirstName(input) {
    const value = input.value;
    if (value === "") {
        input.setCustomValidity("First name cannot be empty.");
    } else if (/[^a-zA-Z]/.test(value)) {
        input.setCustomValidity("First name must contain only letters.");
    } else if (value.length < 2) {
        input.setCustomValidity("First name must be at least 2 characters long.");
    } else if (value.length > 30) {
        input.setCustomValidity("First name cannot be longer than 30 characters.");
    } else {
        input.setCustomValidity(""); // Valid input
    }
}
//pasw
function validatePasswords() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("re_password");

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
        confirmPassword.reportValidity(); // Show the error
        return false;
    } else {
        confirmPassword.setCustomValidity(""); // Clear the error
        return true;
    }
}

// Your main validate function
function validate() {
    // Call existing validations
    if (!validateFirstName()) return false;
    // Add all other validations...

    // Add the password match check here ⬇️
    if (!validatePasswords()) return false;

    return true; // if all validations pass
}

// Real-time password match feedback (optional but recommended)
document.addEventListener("DOMContentLoaded", function() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("re_password");

    confirmPassword.addEventListener("input", validatePasswords);
    password.addEventListener("input", validatePasswords);
//});
// Validate Middle Name
function validateMiddleName(input) {
    const value = input.value;
    if (value !== "" && /[^a-zA-Z]/.test(value)) {
        input.setCustomValidity("Middle name must contain only letters.");
    } else if (value.length > 30) {
        input.setCustomValidity("Middle name cannot be longer than 30 characters.");
    } else {
        input.setCustomValidity(""); // Valid input
    }
}

// Validate Last Name
function validateLastName(input) {
    const value = input.value;
    if (value === "") {
        input.setCustomValidity("Last name cannot be empty.");
    } else if (/[^a-zA-Z]/.test(value)) {
        input.setCustomValidity("Last name must contain only letters.");
    } else if (value.length < 2) {
        input.setCustomValidity("Last name must be at least 2 characters long.");
    } else if (value.length > 30) {
        input.setCustomValidity("Last name cannot be longer than 30 characters.");
    } else {
        input.setCustomValidity(""); // Valid input
    }
}

// Function to validate the email
function validateEmail(input) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (pattern.test(input.value)) {
        input.style.borderColor = "green";
    } else {
        input.style.borderColor = "red";
    }
}

// Function to validate the phone number
function validatePhone(input) {
    const pattern = /^\(\d{3}\) \d{3}-\d{4}$/; // Matches (XXX) XXX-XXXX format
    if (pattern.test(input.value)) {
        input.style.borderColor = "green";
    } else {
        input.style.borderColor = "red";
    }
}


    // Check if any input is invalid
    const invalidInputs = document.querySelectorAll('input:invalid');
    if (invalidInputs.length > 0) {
        alert("Please correct the highlighted fields before submitting.");
        return false;
    }

    return true;
}

function togglePassword(fieldId) {
  const input = document.getElementById(fieldId);
  const type = input.getAttribute("type");

  // Toggle the type between password and text
  input.setAttribute("type", type === "password" ? "text" : "password");
}

// Event listener to ensure passwords match before submission
document.getElementById('patient-form').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('re-password').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match. Please try again.");
    }
});

// Event listener for DOMContentLoaded (slider, max DOB date, and password matching)
document.addEventListener("DOMContentLoaded", function () {
    // Health slider display
    const slider = document.getElementById("health");
    const output = document.getElementById("health-value");
    output.textContent = slider.value;

    slider.addEventListener("input", function () {
        output.textContent = slider.value;
    });

    // Set max date for DOB to today
    const dobInput = document.getElementById("dob");
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const maxDate = `${year}-${month}-${day}`;
    dobInput.setAttribute("max", maxDate);
//obscure ssn
function obscureSSN(ssn) {
    return ssn.replace(/\d{3}-\d{2}-\d{4}/, 'XXX-XX-XXXX');
}

const ssn = "123-45-6789";
console.log(obscureSSN(ssn)); // Output: "XXX-XX-XXXX"
});
