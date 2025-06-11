document.addEventListener("DOMContentLoaded", function () {
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
