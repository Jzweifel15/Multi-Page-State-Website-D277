document.addEventListener("DOMContentLoaded", function() { 

    document.querySelector(".menu-btn").addEventListener("click", () => {
        document.querySelector(".menu-btn").classList.toggle("pressed");
        document.querySelector(".menu").classList.toggle("show");
    });
    
});