const mobileNav = document.querySelector(".navContainer");
const overlay = document.querySelector(".overlay");
const buttonNav = document.querySelector(".navMobile__button");

const toggleNav = () => {
  mobileNav.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

buttonNav.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);
