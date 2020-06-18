/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
function callback(entries) {
  entries.forEach(entry => {
    const element = entry.target;
    const navLink = document.getElementById(element.id[element.id.length - 1]);
    if (entry.isIntersecting) {
      element.classList.add("active");
      navLink.classList.add("active__link");
    } else {
      if (navLink.classList.contains("active__link"))
        navLink.classList.remove("active__link");
      if (element.classList.contains("active"))
        element.classList.remove("active");
    }
  });
}
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4
};
const observer = new IntersectionObserver(callback, options);

// build the nav
(function() {
  const unorderedList = document.querySelector("ul");
  for (let i = 4; i >= 1; i--) {
    const listElement = `<li class='menu__link box' id="${i}"><a href="#section${i}" >Section ${i}</li>`;
    unorderedList.insertAdjacentHTML("beforeend", listElement);
  }
})();

// Add class 'active' to section when near top of viewport
(function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    observer.observe(section);
  });
})();
// Scroll to anchor ID using scrollTO event
(function() {
  const navList = document.getElementById("navbar__list");
  navList.addEventListener("click", event => {
    event.preventDefault();
    const id = event.target.hasAttribute("id")
      ? `section${event.target.id}`
      : `section${event.target.parentElement.id}`;
    const elem = document.getElementById(id);
    elem.scrollIntoView({ block: "end", behavior: "smooth" });
  });
})();
