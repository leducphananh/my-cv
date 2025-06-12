document.addEventListener("DOMContentLoaded", function () {
  // --- Theme Toggle Functionality ---
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = themeToggle.querySelector("i");

  // Function to set theme
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Update button icon
    if (theme === "light") {
      themeIcon.className = "fas fa-moon";
    } else {
      themeIcon.className = "fas fa-sun";
    }
  }

  // Check for saved user preference, if any
  const savedTheme = localStorage.getItem("theme");

  // If we have a saved theme, use it
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Otherwise, try to detect user's preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  // Listen for theme toggle button click
  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });

  // --- Typing Effect ---
  const typingElement = document.querySelector(".typing-effect");
  const text = "Frontend Developer";
  let index = 0;
  let isDeleting = false;

  function type() {
    let currentText = text.substring(0, index);
    typingElement.textContent = currentText;

    if (!isDeleting && index < text.length) {
      index++;
    }

    setTimeout(type, 150);
  }

  if (typingElement) {
    type();
  }

  // --- Intersection Observer for Scroll Animations ---
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    observer.observe(el);
  });
});
