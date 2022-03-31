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

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNavItems() {
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
            section.classList.add('active');
            document.querySelector(`.menu__link[href="#${section.id}"]`).classList.add('active-link');
        } else {
            section.classList.remove('active');
            document.querySelector(`.menu__link[href="#${section.id}"]`).classList.remove('active-link');
        }
    }
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

document.addEventListener('scroll', isActive);