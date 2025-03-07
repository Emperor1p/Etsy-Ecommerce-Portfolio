document.addEventListener("DOMContentLoaded", function () {
    console.log("Etsy Portfolio Website Loaded");

    // Smooth scrolling for navigation
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Toggle Mobile Navigation Menu
    const menuIcon = document.querySelector(".navbar-menu");
    const navList = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                if (filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display = "block";
                    item.classList.add("fade-in");
                } else {
                    item.style.display = "none";
                }
            });

            // Remove active class from all buttons & add to the clicked one
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

const textArray = ["Etsy Specialist", "SEO Expert", "Digital Product Designer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const element = document.getElementById("typing-text");

function typeEffect() {
    const currentText = textArray[textIndex];

    if (isDeleting) {
        element.innerText = currentText.substring(0, charIndex--);
    } else {
        element.innerText = currentText.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 50 : 100; 

    // Hold the last letter longer before deleting
    if (!isDeleting && charIndex === currentText.length + 1) {  
        typingSpeed = 5000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; 
        element.classList.add("fade"); 
        setTimeout(() => element.classList.remove("fade"), 500);
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

