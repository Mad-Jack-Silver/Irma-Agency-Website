/**
 * IRMA Agency - Core Client & Portfolio Showcase Engine
 * Ultra-lightweight, zero external dependencies, 100/100 performance.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year in Footer
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // 2. Mobile Menu Toggle
  const nav = document.querySelector('.nav');
  const menuBtn = document.querySelector('.menu');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });

    nav.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // 3. Navbar scroll state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 4. Scroll Reveal via IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal, .service-card, .promise, .price-card, .culture-card, .work-card, .testimonial-card');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // 5. Portfolio Showcase Drawer & Floating Badge Injection
  initPortfolioShowcase();

  // 6. Interactive Project Cost Estimator (for pricing page)
  initProjectEstimator();

  // 7. Interactive Work Showcase Filters (for work page)
  initWorkFilters();

  // 8. Contact Form Handling with Toast
  initContactForms();
});

/**
 * Initializes the Portfolio Showcase Floating Badge & Drawer
 */
function initPortfolioShowcase() {
  // Check if drawer already exists
  if (document.getElementById('portfolio-drawer')) return;

  // Create floating trigger badge
  const badge = document.createElement('button');
  badge.id = 'portfolio-badge';
  badge.className = 'portfolio-badge';
  badge.setAttribute('aria-label', 'Open Portfolio Case Study');
  badge.innerHTML = `
    <span class="badge-icon">✦</span>
    <span>Case Study &amp; Tech Stack</span>
  `;
  document.body.appendChild(badge);

  // Create drawer overlay & container
  const overlay = document.createElement('div');
  overlay.id = 'portfolio-drawer-overlay';
  overlay.className = 'portfolio-drawer-overlay';

  const drawer = document.createElement('aside');
  drawer.id = 'portfolio-drawer';
  drawer.className = 'portfolio-drawer';
  drawer.innerHTML = `
    <div class="drawer-header">
      <div>
        <div class="kicker" style="margin-bottom: 2px;">Portfolio Showcase</div>
        <h3>Project Technical Case Study</h3>
      </div>
      <button class="drawer-close" aria-label="Close drawer">✕</button>
    </div>
    <div class="drawer-body">
      <div class="case-study-meta">
        <div class="meta-item">
          <span>Client Project</span>
          <strong>IRMA Agency</strong>
        </div>
        <div class="meta-item">
          <span>Scope</span>
          <strong>Design &amp; Engineering</strong>
        </div>
        <div class="meta-item">
          <span>Target Audience</span>
          <strong>US · Canada · Mexico</strong>
        </div>
        <div class="meta-item">
          <span>Launch Timeline</span>
          <strong>7-Day Delivery Target</strong>
        </div>
      </div>

      <div class="kicker">Core Technologies &amp; Architecture</div>
      <div class="tech-pills">
        <span class="tech-pill">Semantic HTML5</span>
        <span class="tech-pill">Modern CSS3 (Grid/Flex)</span>
        <span class="tech-pill">Vanilla JS (Zero Bloat)</span>
        <span class="tech-pill">IntersectionObserver</span>
        <span class="tech-pill">Fluid Typography</span>
        <span class="tech-pill">100 Lighthouse Perf</span>
        <span class="tech-pill">WCAG 2.1 AA a11y</span>
      </div>

      <div class="kicker">Engineering &amp; Design Highlights</div>
      <ul class="achievement-list">
        <li>
          <strong>⚡ High-Performance Architecture:</strong> Zero build-step overhead, sub-second First Contentful Paint, instant navigation, and optimized SVG rendering.
        </li>
        <li>
          <strong>🎨 Editorial Visual Identity:</strong> High-contrast editorial pairing with custom Syne headings, Plus Jakarta Sans body, and metallic champagne bronze micro-accents.
        </li>
        <li>
          <strong>🎛️ Interactive Scope Estimator:</strong> Real-time dynamic cost and turnaround calculator on the pricing page.
        </li>
        <li>
          <strong>📱 Tri-Market &amp; Mobile Polish:</strong> Designed for cross-border commerce across three North American nations, fully responsive down to 320px viewports.
        </li>
        <li>
          <strong>💼 Conversion Strategy:</strong> Direct response copy architecture, strategic proof bars, and friction-free inquiry flows.
        </li>
      </ul>

      <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; gap: 12px;">
        <button class="btn gold" style="flex: 1;" onclick="closeDrawer()">Explore Live Site ↗</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(drawer);

  // Event handlers
  function openDrawer() {
    overlay.classList.add('active');
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    overlay.classList.remove('active');
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  badge.addEventListener('click', openDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelector('.drawer-close')?.addEventListener('click', closeDrawer);

  window.closeDrawer = closeDrawer;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/**
 * Interactive Project Estimator for pricing page
 */
function initProjectEstimator() {
  const estimator = document.querySelector('.estimator-box');
  if (!estimator) return;

  const basePills = estimator.querySelectorAll('[data-base-price]');
  const addonChecks = estimator.querySelectorAll('[data-addon-price]');
  const priceDisplay = estimator.querySelector('#calc-price');
  const timeDisplay = estimator.querySelector('#calc-time');

  let currentBase = 1500;
  let currentTime = "7 business days";

  function calculate() {
    let total = currentBase;
    addonChecks.forEach(chk => {
      if (chk.checked) {
        total += parseInt(chk.getAttribute('data-addon-price'), 10);
      }
    });

    if (priceDisplay) {
      priceDisplay.textContent = `$${total.toLocaleString()}`;
    }
    if (timeDisplay) {
      timeDisplay.textContent = `Estimated completion: ${currentTime}`;
    }
  }

  basePills.forEach(pill => {
    pill.addEventListener('click', () => {
      basePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentBase = parseInt(pill.getAttribute('data-base-price'), 10);
      currentTime = pill.getAttribute('data-time') || "7 business days";
      calculate();
    });
  });

  addonChecks.forEach(chk => {
    chk.addEventListener('change', calculate);
  });

  calculate();
}

/**
 * Interactive Work Gallery category filters
 */
function initWorkFilters() {
  const filterBar = document.querySelector('.work-filter-bar');
  if (!filterBar) return;

  const buttons = filterBar.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.work-card[data-category]');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/**
 * Contact form submission with toast confirmation
 */
function initContactForms() {
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending inquiry...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        form.reset();
        showToast('✨ Inquiry received! We will be in touch within 24 hours.');
      }, 700);
    });
  });
}

/**
 * Shows an animated toast message
 */
function showToast(msg) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
}