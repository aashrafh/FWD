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

// build the nav
(function() {
  const unorderedList = document.querySelector("ul");
  for (let i = 4; i >= 1; i--) {
    const listElement = `<li class='menu__link box' id="${i}"><a href="#section${i}" >Section ${i}</li>`;
    unorderedList.insertAdjacentHTML("beforeend", listElement);
  }
})();

// Add class 'active' to section when near top of viewport

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
