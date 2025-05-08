// TOGGLE_MENU

const toggle = document.querySelector('.toggle_menu');
const navm = document.querySelector('.nav_m');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navm.classList.toggle('open');
});

// FAQ TABS

const faqNav = document.querySelectorAll(".faq_nav_link");
const faqContent = document.querySelectorAll(".answer");

faqNav.forEach((faq) => {
    faq.addEventListener("click", () => {
        removeActiveFaq();
        faq.classList.add("active");

        const activeContent = document.querySelector(`#${faq.id}-content`);
        removeActiveContentFaq();
        activeContent.classList.add("active");
    });
});

function removeActiveFaq() {
    faqNav.forEach((faq) => {
        faq.classList.remove("active");
    });
}

function removeActiveContentFaq() {
    faqContent.forEach((content) => {
        content.classList.remove("active");
    });
}

// SPONSOR TABS

const sponsorNav = document.querySelectorAll(".sponsor_nav_link");
const sponsorContent = document.querySelectorAll(".sponsor_content");

sponsorNav.forEach((sponsor) => {
    sponsor.addEventListener("click", () => {
        removeActiveSponsor();
        sponsor.classList.add("active");

        const activeContent = document.querySelector(`#${sponsor.id}-content`);
        removeActiveContentSponsor();
        activeContent.classList.add("active");
    });
});

function removeActiveSponsor() {
    sponsorNav.forEach((sponsor) => {
        sponsor.classList.remove("active");
    });
}

function removeActiveContentSponsor() {
    sponsorContent.forEach((content) => {
        content.classList.remove("active");
    });
}