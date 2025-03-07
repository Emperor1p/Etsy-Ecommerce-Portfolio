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
