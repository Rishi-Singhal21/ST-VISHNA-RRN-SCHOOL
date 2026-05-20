/* ================================================================
   ST VISHNA RRN SCHOOL — Main JavaScript
   Handles: Navbar, Reveals, Counters, Modals, FAQ, Dark Mode,
            Quote rotation, Faculty, Toppers, Notices rendering
   ================================================================ */

'use strict';

/* ══════════════════════════════════════════════════════════════
   SCROLL PROGRESS BAR
══════════════════════════════════════════════════════════════ */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════════════
   NAVBAR: Scroll shadow + active section highlighting
══════════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const ticker  = document.getElementById('noticeTicker');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle('scrolled', scrolled);
    // Hide ticker when scrolled down
    if (ticker) ticker.style.transform = scrolled ? 'translateY(-100%)' : 'translateY(0)';

    // Highlight active nav section
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active',
        href === '#' + current ||
        (href && href.includes(current) && current !== '')
      );
    });
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════════════
   HAMBURGER / MOBILE MENU
══════════════════════════════════════════════════════════════ */
function initMobileMenu() {
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   SCROLL REVEAL (Intersection Observer)
══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Observe all reveal elements (call after dynamic content renders)
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  return observer; // return so we can re-use after dynamic render
}

/* ══════════════════════════════════════════════════════════════
   ANIMATED COUNTERS
══════════════════════════════════════════════════════════════ */
function animateCounter(el) {
  const target  = parseFloat(el.dataset.target);
  const suffix  = el.dataset.suffix || '';
  const duration = 1800;
  const step    = 16;
  const steps   = duration / step;
  const inc     = target / steps;
  let current   = 0;

  const timer = setInterval(() => {
    current += inc;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = (Number.isInteger(target) ? Math.round(current) : current.toFixed(1)) + suffix;
  }, step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ══════════════════════════════════════════════════════════════
   BACK TO TOP BUTTON
══════════════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ══════════════════════════════════════════════════════════════
   DARK MODE TOGGLE
══════════════════════════════════════════════════════════════ */
function initDarkMode() {
  const btn = document.getElementById('dark-toggle');
  if (!btn) return;

  // Restore saved preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    btn.textContent = '☀️';
  }

  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
  });
}

/* ══════════════════════════════════════════════════════════════
   FACULTY MODAL
══════════════════════════════════════════════════════════════ */
function openFacultyModal(index) {
  if (typeof FACULTY === 'undefined') return;
  const f = FACULTY[index];
  if (!f) return;

  const overlay = document.getElementById('facultyModal');
  if (!overlay) return;

  document.getElementById('modalPhoto').src       = f.photo;
  document.getElementById('modalPhoto').alt       = 'Photo of ' + f.name;
  document.getElementById('modalName').textContent = f.name;
  document.getElementById('modalDesignation').textContent = f.designation + (f.subject ? ' · ' + f.subject : '');

  document.getElementById('modalDetails').innerHTML = `
    <div class="modal-detail">
      <span class="modal-detail-label">Qualification</span>
      <span class="modal-detail-value">${f.qualification}</span>
    </div>
    <div class="modal-detail">
      <span class="modal-detail-label">Experience</span>
      <span class="modal-detail-value">${f.experience}</span>
    </div>
    <div class="modal-detail">
      <span class="modal-detail-label">About</span>
      <span class="modal-detail-value">${f.about}</span>
    </div>
  `;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}

function closeFacultyModal() {
  const overlay = document.getElementById('facultyModal');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initFacultyModal() {
  const closeBtn = document.getElementById('modalClose');
  const overlay  = document.getElementById('facultyModal');
  if (!overlay) return;

  closeBtn && closeBtn.addEventListener('click', closeFacultyModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeFacultyModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFacultyModal(); });
}

/* ══════════════════════════════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════════════════════════════ */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Open clicked if it wasn't open
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   QUOTE ROTATOR
══════════════════════════════════════════════════════════════ */
function initQuotes() {
  if (typeof QUOTES === 'undefined') return;
  const textEl = document.getElementById('quoteText');
  const authEl = document.getElementById('quoteAuthor');
  const refreshBtn = document.getElementById('quoteRefresh');
  if (!textEl || !authEl) return;

  let currentIndex = Math.floor(Math.random() * QUOTES.length);

  function showQuote(index) {
    textEl.style.opacity = '0';
    setTimeout(() => {
      textEl.textContent = '\u201C' + QUOTES[index].text + '\u201D';
      authEl.textContent = QUOTES[index].author;
      textEl.style.opacity = '1';
    }, 300);
  }

  function nextQuote() {
    currentIndex = (currentIndex + 1) % QUOTES.length;
    showQuote(currentIndex);
  }

  refreshBtn && refreshBtn.addEventListener('click', nextQuote);
  showQuote(currentIndex);
  setInterval(nextQuote, 8000);
}

/* ══════════════════════════════════════════════════════════════
   RENDER: FACULTY CARDS
══════════════════════════════════════════════════════════════ */
function renderFaculty(observer) {
  if (typeof FACULTY === 'undefined') return;
  const grid = document.getElementById('facultyGrid');
  if (!grid) return;

  grid.innerHTML = FACULTY.map((f, i) => {
    const delay = i % 4 !== 0 ? ' reveal-delay-' + (i % 4) : '';
    return `
    <article
      class="faculty-card reveal${delay}"
      data-index="${i}"
      tabindex="0"
      role="button"
      aria-label="View profile of ${f.name}"
    >
      <div class="faculty-photo-wrap">
        <img
          src="${f.photo}"
          alt="Photo of ${f.name}"
          class="faculty-photo"
          loading="eager"
          decoding="async"
        />
        <div class="faculty-photo-placeholder">${f.name.split(' ').map(n => n[0]).join('').substring(0,2)}</div>
      </div>
      <h3>${f.name}</h3>
      <p class="designation">${f.designation}</p>
      <p class="subject">${f.subject || ''}</p>
      <span class="view-more">View Profile</span>
    </article>`;
  }).join('');

  // Show placeholder if image fails, hide if loaded
  grid.querySelectorAll('.faculty-photo').forEach(img => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
      const placeholder = img.closest('.faculty-photo-wrap').querySelector('.faculty-photo-placeholder');
      if (placeholder) placeholder.style.display = 'none';
    });
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const placeholder = img.closest('.faculty-photo-wrap').querySelector('.faculty-photo-placeholder');
      if (placeholder) placeholder.style.display = 'flex';
    });
    // If already loaded (cached)
    if (img.complete && img.naturalWidth > 0) {
      img.style.opacity = '1';
      const placeholder = img.closest('.faculty-photo-wrap').querySelector('.faculty-photo-placeholder');
      if (placeholder) placeholder.style.display = 'none';
    } else if (img.complete && img.naturalWidth === 0) {
      img.style.display = 'none';
    }
  });

  // Attach events
  grid.querySelectorAll('.faculty-card').forEach(card => {
    const open = () => openFacultyModal(parseInt(card.dataset.index, 10));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });

  // Observe newly added cards
  if (observer) grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   RENDER: TOPPERS
══════════════════════════════════════════════════════════════ */
function renderToppers(observer) {
  if (typeof TOPPERS === 'undefined') return;
  const grid = document.getElementById('toppersGrid');
  if (!grid) return;

  const rankClass = r => {
    if (r === 1) return 'rank-1';
    if (r === 2) return 'rank-2';
    if (r === 3) return 'rank-3';
    return 'rank-other';
  };
  const rankIcon = r => {
    if (r === 1) return '🥇';
    if (r === 2) return '🥈';
    if (r === 3) return '🥉';
    return '#' + r;
  };

  grid.innerHTML = TOPPERS.map((t, i) => `
    <article class="topper-card reveal${i % 4 !== 0 ? ' reveal-delay-' + (i % 4) : ''}">
      <div class="topper-rank ${rankClass(t.rank)}" aria-label="Rank ${t.rank}">${rankIcon(t.rank)}</div>
      <img src="${t.photo}" alt="Photo of ${t.name}" class="topper-photo" loading="eager" decoding="async" />
      <h3>${t.name}</h3>
      <div class="topper-percent">${t.percent}</div>
      <p class="topper-meta">${t.class} · ${t.year}</p>
    </article>
  `).join('');

  if (observer) grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   RENDER: NOTICES
══════════════════════════════════════════════════════════════ */
function renderNotices(observer) {
  if (typeof NOTICES === 'undefined') return;
  const list = document.getElementById('noticeList');
  if (!list) return;

  const tagClass = t => {
    if (t === 'urgent') return 'tag-urgent';
    if (t === 'important') return 'tag-important';
    return 'tag-normal';
  };

  list.innerHTML = NOTICES.map((n, i) => `
    <article class="notice-item ${n.type} reveal${i % 3 !== 0 ? ' reveal-delay-' + (i % 3) : ''}">
      <span class="notice-tag ${tagClass(n.type)}">${n.tag}</span>
      <div class="notice-content">
        <h4>${n.title}</h4>
        <p>${n.body}</p>
        <time class="notice-date" datetime="${n.date}">${n.date}</time>
      </div>
    </article>
  `).join('');

  if (observer) list.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   RENDER: EVENTS PREVIEW (Homepage)
══════════════════════════════════════════════════════════════ */
function renderEventsPreview(observer) {
  if (typeof EVENTS === 'undefined') return;
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;

  // Show only first 3 events on homepage
  grid.innerHTML = EVENTS.slice(0, 3).map((ev, i) => `
    <article class="event-card reveal${i !== 0 ? ' reveal-delay-' + i : ''}" data-id="${ev.id}">
      <div class="event-img-wrap">
        <img src="${ev.image}" alt="${ev.title}" loading="eager" decoding="async" class="event-img" />
        <span class="event-cat-badge">${ev.category}</span>
      </div>
      <div class="event-body">
        <div class="event-date-row">
          <span class="event-date">📅 ${ev.date}</span>
          <span class="event-time">🕐 ${ev.time}</span>
        </div>
        <h3>${ev.title}</h3>
        <p>${ev.shortDesc}</p>
        <button class="btn-event-more" onclick="openEventModal(${ev.id})" aria-label="Read more about ${ev.title}">
          Read More →
        </button>
      </div>
    </article>
  `).join('');

  if (observer) grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Image load handlers for event cards
  grid.querySelectorAll('.event-img').forEach(img => {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('img-loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('img-loaded'));
      img.addEventListener('error', () => img.style.display = 'none');
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   EVENT MODAL (Homepage)
══════════════════════════════════════════════════════════════ */
function openEventModal(id) {
  if (typeof EVENTS === 'undefined') return;
  const ev = EVENTS.find(e => e.id === id);
  if (!ev) return;

  const overlay = document.getElementById('eventModal');
  if (!overlay) return;

  overlay.innerHTML = `
    <div class="modal-box event-modal-box" role="dialog" aria-modal="true" aria-label="${ev.title}">
      <button class="modal-close" id="eventModalClose" aria-label="Close">✕</button>
      <img src="${ev.image}" alt="${ev.title}" class="event-modal-img" loading="lazy" />
      <div class="event-modal-body">
        <span class="event-cat-badge">${ev.category}</span>
        <h2>${ev.title}</h2>
        <div class="event-modal-meta">
          <span>📅 ${ev.date}</span>
          <span>🕐 ${ev.time}</span>
          <span>📍 ${ev.venue}</span>
          <span>👤 ${ev.organizer}</span>
        </div>
        <p>${ev.fullDesc}</p>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  overlay.querySelector('#eventModalClose').addEventListener('click', closeEventModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeEventModal(); });
}

function closeEventModal() {
  const overlay = document.getElementById('eventModal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Expose to HTML onclick
window.openEventModal = openEventModal;

/* ══════════════════════════════════════════════════════════════
   RENDER: TESTIMONIALS
══════════════════════════════════════════════════════════════ */
function renderTestimonials(observer) {
  if (typeof TESTIMONIALS === 'undefined') return;
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map((t, i) => `
    <article class="testimonial-card reveal${i !== 0 ? ' reveal-delay-' + i : ''}">
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <img src="${t.photo}" alt="${t.name}" class="testimonial-avatar" loading="eager" decoding="async" />
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </article>
  `).join('');

  if (observer) grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   RENDER: FAQ
══════════════════════════════════════════════════════════════ */
function renderFAQ() {
  if (typeof FAQS === 'undefined') return;
  const list = document.getElementById('faqList');
  if (!list) return;

  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item${i === 0 ? ' open' : ''}">
      <div class="faq-question" tabindex="0" role="button" aria-expanded="${i === 0}">
        <span>${f.question}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <p>${f.answer}</p>
      </div>
    </div>
  `).join('');

  // Re-init FAQ after rendering
  initFAQ();
}

/* ══════════════════════════════════════════════════════════════
   INIT — Run everything on DOMContentLoaded
══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Core UI
  initScrollProgress();
  initNavbar();
  initMobileMenu();
  initBackToTop();
  initDarkMode();
  initFacultyModal();
  initCounters();
  initQuotes();

  // Render dynamic content
  const observer = initScrollReveal();
  renderFaculty(observer);
  renderToppers(observer);
  renderNotices(observer);
  renderEventsPreview(observer);
  renderTestimonials(observer);
  renderFAQ();

  // Observe static reveal elements
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }, 100);
});

/* ══════════════════════════════════════════════════════════════
   LAZY IMAGE FADE-IN
   Marks images as .loaded once they finish loading
══════════════════════════════════════════════════════════════ */
function initLazyImageFade() {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   SMOOTH SCROLL for anchor links
══════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* Add to DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
  initLazyImageFade();
  initSmoothScroll();
  initSmartImageLoader();
});

/* ══════════════════════════════════════════════════════════════
   SMART IMAGE LOADER
   Shows shimmer while loading, removes it when loaded/errored
══════════════════════════════════════════════════════════════ */
function initSmartImageLoader() {
  document.querySelectorAll('.about-img').forEach(img => {
    // Add shimmer while loading
    if (!img.complete || img.naturalWidth === 0) {
      img.classList.add('img-loading');
    }
    img.addEventListener('load', () => {
      img.classList.remove('img-loading');
      img.classList.add('loaded');
    });
    img.addEventListener('error', () => {
      img.classList.remove('img-loading');
      // Apply gradient fallback visually
      img.style.background = 'linear-gradient(135deg, #ffedd5 0%, #e2e8f0 100%)';
    });
  });
}
