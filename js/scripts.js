// Nav Menu
const mobileNavButton = document.getElementById("mobi-menu");
const mobileNav = document.getElementById("menu-modal");
const closeModalButton = document.getElementById("close-modal");
const body = document.querySelector("body");
const navList = document.querySelector("#nav-list");

mobileNavButton.onclick = () => {
    body.style.overflow = "hidden";
    mobileNav.style.display = "block";
};

closeModalButton.onclick = () => {
    mobileNav.style.display = "none";
    body.style.overflow = "auto";
};

navList.onclick = () => {
    mobileNav.style.display = "none";
    body.style.overflow = "auto";
};

// Project View
const projectView = document.getElementById("project-view");
const works = document.querySelectorAll("#see-project");
const closeProject = document.getElementById("close-project-modal");
const workCards = Array.from(works);

workCards.forEach(element => {
    element.onclick = (e) => {
        projectView.style.display = 'block';
        body.style.overflow = "hidden";
    };
})

closeProject.onclick = () => {
    projectView.style.display = "none";
    body.style.overflow = "auto";
};