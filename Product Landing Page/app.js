// Window loader, refresh page
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.className += "hidden";
});

// Scroll animation for elements
const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};
window.addEventListener("scroll", reveal);
