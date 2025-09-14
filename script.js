// ========== PART 1: Event Handling & Interactive Elements ==========

// Light/Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter - Years in Tech
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  if (count > 0) count--;
  counterDisplay.textContent = count;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ========== PART 2: Interactive Tabs ==========
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active from all buttons
    tabButtons.forEach((b) => b.classList.remove("active"));
    // Hide all content
    tabContents.forEach((c) => c.classList.add("hidden"));

    // Activate clicked button
    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.tab);
    target.classList.remove("hidden");
  });
});

// ========== PART 3: Form Validation ==========
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Message validation
  const message = document.getElementById("message").value.trim();
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
    valid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  // Final feedback
  if (valid) {
    document.getElementById("formMessage").textContent = "✅ Message sent successfully!";
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("formMessage").textContent = "❌ Please fix errors above.";
  }
});
