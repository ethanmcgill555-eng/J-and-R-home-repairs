function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const msg = document.getElementById("formMessage");
  msg.textContent = "Appreciate it — we'll get back to you shortly.";
  msg.style.color = "#ff6a00";

  this.reset();
});
