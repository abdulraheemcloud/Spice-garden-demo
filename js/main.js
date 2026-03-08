// =============================================
//   SPICE GARDEN RESTAURANT — JS
//   Built by RNS Digital
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll fade-in animation ──────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.card, .menu-card, .gallery-item, .reservation-box, .map-placeholder')
    .forEach(el => {
      el.classList.add('fade-up');
      observer.observe(el);
    });

  // ── Active nav highlight on scroll ───────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.btn-whatsapp)');

  const highlightNav = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
  highlightNav(); // run on load

  // ── Smooth scroll for nav links ───────────────────────────
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  console.log('🌿 Spice Garden | Built by RNS Digital');
});

// Add CSS for fade-up + active nav via JS
const style = document.createElement('style');
style.textContent = `
  .fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .nav-links a.active {
    color: #c9952a !important;
  }
  .nav-links a.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #c9952a;
    margin-top: 2px;
    border-radius: 2px;
  }
`;
document.head.appendChild(style);
