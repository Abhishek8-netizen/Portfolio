function scroll() {
    window.scrollTo(0, 0);
}

// Function to create a reusable IntersectionObserver for any section
function createObserver(sectionName, sectionCards, className) {

    // Track the last scroll position to detect scroll direction
    let lastScroll = 0;

    // Callback function triggered when observed elements intersect with the viewport
    function animate(entries) {

        // Get the vertical position of the section from the top of the page
        let sectionPosition = sectionName.offsetTop;

        // Get the current scroll position of the user
        let userPosition = window.pageYOffset;

        // Determine if the user is scrolling up
        let scrollingUp = userPosition < lastScroll;

        // Loop through each observed entry (card)
        entries.forEach((entry, index) => {

            // If the card is visible in the viewport
            if (entry.isIntersecting) {

                // Add the animation class with a staggered delay
                setTimeout(() => {
                    entry.target.classList.add(className);
                }, index * 120);
            }

            // If the card is not visible and the user is scrolling up past the section
            else {
                if (scrollingUp && userPosition < sectionPosition) {

                    // Remove the animation class from all cards in the section
                    entries.forEach(entry => {
                        entry.target.classList.remove(className);
                    });
                }
            }

            // Update the last scroll position for the next scroll event
            lastScroll = userPosition;
        });
    }

    // Return a new IntersectionObserver with the animate callback and a visibility threshold
    return new IntersectionObserver(animate, { threshold: 0.3 })

    /*return new IntersectionObserver((entries) => {
        let sectionPosition = sectionName.offsetTop;
        let userPosition = window.pageYOffset;
        let scrollingUp = userPosition < lastScroll;

        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add(className);
                }, index * 150);
            }
            else {
                if (scrollingUp && userPosition < sectionPosition) {
                    entries.forEach(entry => {
                        entry.target.classList.remove(className);
                    });
                }
            }

            lastScroll = userPosition;
        });
    }, { threshold: 0.3 });*/
}

// Select the skills section and its cards
const skillSection = document.getElementById("skills_section");
const skillCards = document.querySelectorAll(".skills_card");

// Select the projects section and its cards
const projectSection = document.getElementById("projects_section");
const projectCards = document.querySelectorAll(".project_card");


// Select the languages section and its cards
const langSection = document.getElementById("languages_section");
const langCards = document.querySelectorAll(".lang_card");

// Create and apply observer for skill cards
let skillObserver = createObserver(skillSection, skillCards, "showCard");
skillCards.forEach(card => skillObserver.observe(card));

// Create and apply observer for project cards
let projectObserver = createObserver(projectSection, projectCards, "showProjCard");
projectCards.forEach(card => projectObserver.observe(card));

// Create and apply observer for language cards
let langObserver = createObserver(langSection, langCards, "showLangCard");
langCards.forEach(card => langObserver.observe(card));

/*********************************************************************************************** */

let themeDark = false
const bodyElement = document.querySelector("body");
const navElement = document.querySelector("nav");
const navLinks = document.querySelectorAll(".navLink");
const themeButton = document.getElementById("themeButton");
const mainHeadings = document.querySelectorAll(".main_heading");
const myName = document.getElementById("name");
const profileLinks = document.querySelectorAll(".profileLink");
const eduContent = document.querySelectorAll(".edu_content");
const introPara = document.getElementById("intro_para");
const projHint = document.getElementById("project_hint");
const projLinks = document.querySelectorAll(".proj_link")
const langNames = document.querySelectorAll(".lang_name");
const footer = document.querySelector("footer");
const contactDetailHeading = footer.querySelector("h2");
const contactLinks = footer.querySelectorAll("a");

function changeTheme() {

    if (!themeDark) {
        themeButton.textContent = "Light mode";
        themeDark = 1;
    }
    else {
        themeButton.textContent = "Dark mode";
        themeDark = 0;
    }

    bodyElement.classList.toggle("changeBackground");
    navElement.classList.toggle("DarkNav");
    navLinks.forEach(link => link.classList.toggle("DarkAnchor"));
    themeButton.classList.toggle("DarkButton");
    mainHeadings.forEach(heading => heading.classList.toggle("DarkMainHeading"));
    myName.classList.toggle("DarkModeName");
    introPara.classList.toggle("DarkIntroPara");
    profileLinks.forEach(profileLink => profileLink.classList.toggle("DarkProfileLink"));
    eduContent.forEach(education => education.classList.toggle("DarkModeEduContent"));
    skillCards.forEach(card => card.classList.toggle("DarkModeSkillCard"));
    projHint.classList.toggle("DarkModeHint");
    projectCards.forEach(card => card.classList.toggle("DarkModeProjCard"));
    projLinks.forEach(link => link.classList.toggle("DarkModeProjLink"));
    langCards.forEach(card => card.classList.toggle("DarkModeLangCard"));
    langNames.forEach(lang => lang.classList.toggle("DarkModeLangName"));
    footer.classList.toggle("DarkModeFooter");
    contactDetailHeading.classList.toggle("DarkModeContactsHeading");
    contactLinks.forEach(link => link.classList.toggle("DarkModeContactLinks"))
}