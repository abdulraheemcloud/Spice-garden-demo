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

  // ── Active nav link highlight ─────────────────────────────
  const navLinks = document.querySelectorAll('.nav-links a:not(.btn-whatsapp)');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // ── WhatsApp float tooltip ────────────────────────────────
  const floatBtn = document.querySelector('.whatsapp-float');
  if (floatBtn) {
    floatBtn.setAttribute('title', 'Chat with us on WhatsApp!');
  }

  console.log('🌿 Spice Garden | Built by RNS Digital');
});

// Add CSS for fade-up via JS
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
    color: #c9952a;
  }
`;
document.head.appendChild(style);
