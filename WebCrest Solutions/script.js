console.log("WebCrest Solution Loaded Successfully")

// Loader

window.addEventListener("load", () => {

        document.getElementById("loader").style.display = "none";
});

// AOS

AOS.init({
    duration:1000,
    once:true
});

// Mobile Menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menu.BtnaddEventListener("click", () => {
    navLinks.classList.toggle("active");
});