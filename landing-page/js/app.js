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
function inViewport(element) {
  const bounding = element.getBoundingClientRect();
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  )
    return true;
  else return false;
}
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
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      inViewport(section)
        ? section.classList.add("active")
        : section.classList.remove("active");
    });
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
