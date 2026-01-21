// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Animate skills
const skills = document.querySelectorAll(".skill");

function animateSkills() {
    skills.forEach(skill => {
        const level = skill.getAttribute("data-level");
        const progress = skill.querySelector(".progress");
        progress.style.width = level + "%";
    });
}

window.addEventListener("scroll", animateSkills);

// Dark mode
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
        document.body.classList.contains("dark")
            ? "☀️"
            : "🌙 ";
});
