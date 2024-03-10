document.addEventListener("DOMContentLoaded", function() { 

    // Toggles classes for the hamburger button in the header
    document.querySelector(".menu-btn").addEventListener("click", () => {
        document.querySelector(".menu-btn").classList.toggle("pressed");
        document.querySelector(".menu").classList.toggle("show");
    });
    
});