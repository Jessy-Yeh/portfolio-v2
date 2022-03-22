const menuIcon = document.querySelector(".menu");
const menuContent = document.querySelector(".menu-content-container");

menuIcon.addEventListener("click", () => {
  menuContent.classList.toggle("display");
});

menuContent.addEventListener("click", () => {
  menuContent.classList.toggle("display");
});
