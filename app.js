/* Riverbend Plaza — interactive directory, nav, and form handling */
(function () {
  "use strict";

  /* ---- Store data (edit here to manage the directory) ---- */
  const STORES = [
    { name: "Magnolia & Co.", category: "fashion", cat: "Fashion", meta: "Women's boutique · Suite 110" },
    { name: "Razorback Threads", category: "fashion", cat: "Fashion", meta: "Casual apparel · Suite 112" },
    { name: "The Denim Bar", category: "fashion", cat: "Fashion", meta: "Jeans & basics · Suite 118" },
    { name: "Little Rock Kids", category: "fashion", cat: "Fashion", meta: "Children's wear · Suite 120" },
    { name: "Delta Roast Coffee", category: "dining", cat: "Dining", meta: "Coffee & pastries · Food Hall" },
    { name: "The Catfish Co.", category: "dining", cat: "Dining", meta: "Southern comfort · Suite 200" },
    { name: "Sora Ramen Bar", category: "dining", cat: "Dining", meta: "Japanese · Suite 205" },
    { name: "Pinnacle Pizza", category: "dining", cat: "Dining", meta: "Wood-fired pizza · Suite 210" },
    { name: "Verdure", category: "dining", cat: "Dining", meta: "Salads & bowls · Food Hall" },
    { name: "Sweet Magnolia Bakery", category: "dining", cat: "Dining", meta: "Cakes & treats · Suite 214" },
    { name: "River City Home", category: "home", cat: "Home & Gifts", meta: "Home decor · Suite 130" },
    { name: "The Paper Lark", category: "home", cat: "Home & Gifts", meta: "Stationery & gifts · Suite 132" },
    { name: "Bloom Florals", category: "home", cat: "Home & Gifts", meta: "Florist · Suite 134" },
    { name: "Arkansas Made", category: "home", cat: "Home & Gifts", meta: "Local artisan goods · Suite 136" },
    { name: "Glow Skincare Studio", category: "health", cat: "Health & Beauty", meta: "Facials & skincare · Suite 150" },
    { name: "Clip & Co. Salon", category: "health", cat: "Health & Beauty", meta: "Hair salon · Suite 152" },
    { name: "Polished Nail Bar", category: "health", cat: "Health & Beauty", meta: "Manicures · Suite 154" },
    { name: "Pinnacle Pharmacy", category: "health", cat: "Health & Beauty", meta: "Pharmacy & wellness · Suite 156" },
    { name: "Riverbend Optical", category: "services", cat: "Services", meta: "Eyewear · Suite 160" },
    { name: "QuickFix Mobile", category: "services", cat: "Services", meta: "Phone repair · Suite 162" },
    { name: "First Arkansas Bank", category: "services", cat: "Services", meta: "ATM & branch · Suite 164" },
    { name: "The Mail Room", category: "services", cat: "Services", meta: "Shipping & postal · Suite 166" },
  ];

  /* logo color rotation by category for a bit of variety */
  const CAT_COLORS = {
    fashion: "#1b7a8f",
    dining: "#e0901a",
    home: "#0f4c5c",
    health: "#2f8f6b",
    services: "#5a6b70",
  };

  const grid = document.getElementById("store-grid");
  const noResults = document.getElementById("no-results");
  const searchInput = document.getElementById("store-search");
  const chips = Array.from(document.querySelectorAll(".chip"));

  let activeFilter = "all";

  function initials(name) {
    return name
      .replace(/^(the)\s+/i, "")
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  function render() {
    if (!grid) return;
    const q = (searchInput.value || "").trim().toLowerCase();
    const visible = STORES.filter((s) => {
      const matchCat = activeFilter === "all" || s.category === activeFilter;
      const matchText = !q || s.name.toLowerCase().includes(q) || s.cat.toLowerCase().includes(q);
      return matchCat && matchText;
    });

    grid.innerHTML = visible
      .map((s) => {
        const color = CAT_COLORS[s.category] || "#1b7a8f";
        return `
        <li class="store-card">
          <span class="store-logo" style="background:${color}">${initials(s.name)}</span>
          <span class="store-cat">${s.cat}</span>
          <h3>${s.name}</h3>
          <p class="store-meta">${s.meta}</p>
        </li>`;
      })
      .join("");

    noResults.hidden = visible.length > 0;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      activeFilter = chip.dataset.filter;
      render();
    });
  });

  if (searchInput) searchInput.addEventListener("input", render);

  /* "See all dining" jump buttons -> apply filter then scroll */
  document.querySelectorAll("[data-jump]").forEach((el) => {
    el.addEventListener("click", () => {
      const target = el.dataset.jump;
      const chip = chips.find((c) => c.dataset.filter === target);
      if (chip) chip.click();
    });
  });

  render();

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---- Leasing form (front-end demo handling) ---- */
  const form = document.getElementById("leasing-form");
  const note = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        note.style.color = "#b23b3b";
        note.textContent = "Please enter your name and a valid email.";
        return;
      }
      note.style.color = "";
      note.textContent = `Thanks, ${name.split(" ")[0]}! Our leasing team will reach out shortly.`;
      form.reset();
    });
  }

  /* ---- Footer year ---- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
