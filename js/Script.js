// Mobile menu toggle with smooth transition
document.addEventListener('DOMContentLoaded', function () {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      // Change icon (optional)
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when a nav link is clicked (smooth scroll handled separately)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        // close mobile menu if open
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          const icon = mobileToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
  }

  // Smooth scrolling for internal anchor links (including nav links)
  const allLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  allLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault(); // prevent jump, use smooth scroll
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL hash without jumping (optional)
        history.pushState(null, null, targetId);
      }
    });
  });

  // Optional: Add a fallback for older browsers, but smooth scrolling via CSS is also present.
  // Also, we can ensure that any direct hash access (initial load) also smooth?
  // if window.location.hash, scroll to it smoothly after a tiny delay
  if (window.location.hash) {
    const hash = window.location.hash;
    const element = document.querySelector(hash);
    if (element) {
      // slight delay to let layout settle
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});
