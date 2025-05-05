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