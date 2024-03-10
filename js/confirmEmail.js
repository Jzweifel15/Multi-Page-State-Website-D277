document.addEventListener("DOMContentLoaded", function() { 

    // Checks that 'Email' and 'Confirm Email' match on the Contact Page
    document.querySelector(".submit-btn").addEventListener("click", (event) => {
        const emailInput = document.getElementById("email").value;
        const confirmEmailInput = document.getElementById("confirmEmail").value;

        if (emailInput === "") {
            event.preventDefault();
            alert("Email field is required.");
        }
        else if (emailInput !== confirmEmailInput) {
            event.preventDefault();
            alert("Emails dot not match.");
        }
        else {
            alert("Emails match.");
        }
    });
    
});