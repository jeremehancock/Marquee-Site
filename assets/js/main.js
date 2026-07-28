/* Marquee site — small progressive enhancements, no dependencies. */
(function () {
    'use strict';

    /* Mobile navigation ------------------------------------------------- */
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navToggle');

    function closeNav() {
        if (!nav || !toggle) return;
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        document.body.classList.remove('is-locked');
    }

    if (nav && toggle) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            document.body.classList.toggle('is-locked', open);
        });

        nav.addEventListener('click', function (event) {
            if (event.target.closest('a')) closeNav();
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeNav();
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 800) closeNav();
        });
    }

    /* Header shadow once scrolled --------------------------------------- */
    var header = document.getElementById('siteHeader');

    if (header) {
        var onScroll = function () {
            header.classList.toggle('is-stuck', window.scrollY > 8);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* Reveal sections as they enter the viewport ------------------------ */
    var revealables = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        revealables.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

        revealables.forEach(function (el) { observer.observe(el); });
    }

    /* FAQ: only one answer open at a time ------------------------------- */
    var faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(function (item) {
        item.addEventListener('toggle', function () {
            if (!item.open) return;
            faqItems.forEach(function (other) {
                if (other !== item) other.open = false;
            });
        });
    });

    /* Footer year ------------------------------------------------------- */
    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
})();
