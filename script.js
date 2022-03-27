const menuIcon = document.querySelector(".menu");
const menuContent = document.querySelector(".menu-content-container");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .menu-content-container ul li");

menuIcon.addEventListener("click", () => {
  menuContent.classList.toggle("display");
});

menuContent.addEventListener("click", () => {
  menuContent.classList.toggle("display");
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("current");
    if (li.classList.contains(current)) {
      li.classList.add("current");
    }
  });
});
