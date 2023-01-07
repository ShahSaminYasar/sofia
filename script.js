const header = document.getElementById("header");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const menuIcon = document.querySelector(".menu-icon");
const navlinks = document.querySelector(".navlinks");
const scrollToTopBtn = document.querySelector("#scroll-to-top");

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.classList.add("active");
  } else {
    scrollToTopBtn.classList.remove("active");
  }
};

mobileMenuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
});
