/* Dark mode button */
const darkModeBtn = document.querySelector("#dark-mode");
darkModeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("dark-mode");
});

/* Hamburger menu */
const navContent = document.querySelector(".nav-content");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", (e) => {
  if (navContent.style.display === "none") {
    navContent.classList.add("show");
    navContent.style.display = "block";

    nav.style.height = "12rem";
    main.style.marginTop = "13rem";
  } else {
    navContent.style.display = "none";
    navContent.classList.add("hide");

    /* the height of the top nav without the nav links */
    nav.style.height = "3.5rem";
    main.style.marginTop = "4rem";
  }
});
