(function () {
  'use strict';

  // 1. prefers-reduced-motion check
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 2. Reveal animation (IntersectionObserver)
  var reveals = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // 3. Nav scroll background
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('nav--scrolled', window.scrollY > 50);
    }, { passive: true });
    // Initial check in case page is loaded scrolled
    nav.classList.toggle('nav--scrolled', window.scrollY > 50);
  }

  // 4. Nav active highlight (index.html only — sections with id)
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  if (sections.length && navLinks.length && !prefersReduced) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(function (s) {
      sectionObserver.observe(s);
    });
  }

  // 5. Hamburger toggle
  var toggle = document.getElementById('navToggle');
  var navMenu = document.querySelector('.nav__menu');
  if (toggle && nav && navMenu) {
    // Click toggle
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
    });

    // Close on nav link click
    navMenu.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '메뉴 열기');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (nav && !nav.contains(e.target)) {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '메뉴 열기');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav && nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '메뉴 열기');
        toggle.focus();
      }
    });
  }
})();
