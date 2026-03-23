document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "Thanks — we’ll reach out soon.";
});
