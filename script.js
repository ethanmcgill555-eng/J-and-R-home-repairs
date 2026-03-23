// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // offset for navbar
        behavior: 'smooth'
      });
    }
  });
});

// Optional: simple alert when clicking email or phone
const contactLinks = document.querySelectorAll('#contact a');
contactLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log(`User clicked on contact link: ${link.href}`);
  });
});

// Optional: mobile menu toggle if you expand site later
/*
const menuButton = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.navbar');
if(menuButton) {
  menuButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
  });
}
*/
