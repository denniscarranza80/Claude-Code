/* =============================================================
   Plaza La Cima — Shared site behavior
   Runs on every page: mobile nav, sticky-header state, scroll
   reveal animations, today's-hours highlight, footer year, and
   the leasing form. All progressive-enhancement; the site works
   without JS.
   ============================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    const close = () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ---- Sticky header: add shadow once scrolled ---- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Scroll reveal via IntersectionObserver ---- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if (prefersReduced || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
      );
      revealEls.forEach((el) => io.observe(el));
    }
  }

  /* ---- Today's hours highlight (any table.hours with [data-day]) ---- */
  const hoursTable = document.querySelector(".hours");
  if (hoursTable) {
    const today = new Date().getDay(); // 0=Sun .. 6=Sat
    hoursTable.querySelectorAll("tr[data-day]").forEach((row) => {
      const days = row.dataset.day.split(",").map(Number);
      if (days.includes(today)) row.classList.add("today");
    });
  }

  /* ---- Leasing / contact form (front-end validation + feedback) ---- */
  const form = document.getElementById("leasing-form");
  if (form) {
    const note = document.getElementById("form-note");
    const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    const setError = (field, msg) => {
      const wrap = field.closest(".field");
      if (wrap) wrap.classList.toggle("invalid", Boolean(msg));
      const err = wrap && wrap.querySelector(".err");
      if (err) err.textContent = msg || "";
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      const name = form.elements.name;
      const email = form.elements.email;

      if (!name.value.trim()) { setError(name, "Please enter your name."); ok = false; }
      else setError(name, "");

      if (!emailRe.test(email.value.trim())) { setError(email, "Enter a valid email address."); ok = false; }
      else setError(email, "");

      if (!ok) {
        note.className = "form-note bad";
        note.textContent = "Please fix the highlighted fields.";
        return;
      }

      note.className = "form-note ok";
      note.textContent = `Thank you, ${name.value.trim().split(" ")[0]}! Our leasing team will be in touch within two business days.`;
      form.reset();
    });

    // clear error as the user types
    form.querySelectorAll("input, textarea").forEach((el) =>
      el.addEventListener("input", () => setError(el, ""))
    );
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
