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

const sections = document.getElementsByTagName('section');

const fragment = document.createDocumentFragment();

const navbar = document.getElementById('navbar__list');

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

for (const section of sections) {
    const listElement = document.createElement('li');

    const anchorElement = document.createElement('a');
    anchorElement.classList.add('menu__link');

    anchorElement.innerHTML = `${section.attributes['data-nav'].value}`;
    anchorElement.setAttribute('href', `#${section.id}`);

    listElement.append(anchorElement);
    fragment.appendChild(listElement);
}

navbar.appendChild(fragment);


// Add class 'active' to section when near top of viewport




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active








