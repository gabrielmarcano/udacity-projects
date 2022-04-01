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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

var sections = document.getElementsByTagName("section");

var fragment = document.createDocumentFragment();

var navbar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function sectionPosition(section) {
    const sectionRectangle = section.getBoundingClientRect();
    return {
        top: sectionRectangle.top + window.scrollY,
        left: sectionRectangle.left + window.scrollX
    };
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNavmenu() {
    for (const section of sections) {
        const listElement = document.createElement("li");

        const anchorElement = document.createElement("a");
        anchorElement.classList.add("menu__link");

        anchorElement.innerHTML = `${section.attributes["data-nav"].value}`;
        anchorElement.setAttribute("href", `#${section.id}`);

        listElement.append(anchorElement);
        fragment.appendChild(listElement);
    }

    navbar.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport

function isActive() {
    for (const section of sections) {
        const sectionBoundary = section.getBoundingClientRect();
        if (sectionBoundary.top <= 100 && sectionBoundary.bottom >= 100) {
            section.classList.add("active");
            document.querySelector(`.menu__link[href="#${section.id}"]`).classList.add("active__link");
        } else {
            section.classList.remove("active");
            document.querySelector(`.menu__link[href="#${section.id}"]`).classList.remove("active__link");
        }
    }
}

// Scroll to anchor ID using scrollTO event

function scrollToSection(event) {
    event.preventDefault();

    if (event.target.tagName == "A") {
        const section = document.querySelector(event.target.getAttribute("href"));

        const position = sectionPosition(section);

        const headerHeight = document.querySelector('.page__header').offsetHeight;

        window.scrollTo({
            top: position.top - headerHeight,
            left: position.left,
            behavior: "smooth",
        });
    }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

document.addEventListener("DOMContentLoaded", buildNavmenu);

// Scroll to section on link click

navbar.addEventListener("click", scrollToSection);

// Set sections as active

document.addEventListener("scroll", isActive);
