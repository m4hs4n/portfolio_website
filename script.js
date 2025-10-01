function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const button = document.getElementById("next");

button.addEventListener("click", doSomething);

function doSomething() {
  location.href = "./#experience";
}
