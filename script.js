// js/script.js
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Close mobile menu if open
      document.getElementById('menu-toggle').checked = false;
    });
  });

  // Add active class to nav links on scroll
  window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    const headerHeight = document.querySelector('header').offsetHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Header background on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
  });

  // Form submission (placeholder)
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
  });
});