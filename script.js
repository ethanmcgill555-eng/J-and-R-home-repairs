// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Contact form submission feedback
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = 'Thank you! Your message has been sent.';
  formMessage.style.color = 'green';
  contactForm.reset();
});
