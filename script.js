
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const opened = navLinks.classList.contains("active");
  menuBtn.textContent = opened ? "×" : "☰";
  menuBtn.setAttribute("aria-expanded", String(opened));
});

// Close menu after clicking a section
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();
