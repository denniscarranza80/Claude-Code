/* =============================================================
   Plaza La Cima — Store directory
   Renders the searchable / filterable directory from window.PLAZA.
   Used on the Stores page (full list) and the home page (a
   featured subset via [data-limit]).
   ============================================================= */
(function () {
  "use strict";

  const data = window.PLAZA;
  const grid = document.getElementById("store-grid");
  if (!data || !grid) return;

  const { STORES, CAT_COLORS, CATEGORIES } = data;
  const searchInput = document.getElementById("store-search");
  const filtersWrap = document.querySelector(".filters");
  const noResults = document.getElementById("no-results");
  const countEl = document.getElementById("result-count");
  const limit = grid.dataset.limit ? parseInt(grid.dataset.limit, 10) : Infinity;

  let activeFilter = "all";

  /* Build filter chips from the category list (if a .filters container exists) */
  if (filtersWrap) {
    const chips = [{ key: "all", label: "All Stores" }, ...CATEGORIES];
    filtersWrap.innerHTML = chips
      .map(
        (c, i) =>
          `<button class="chip${i === 0 ? " is-active" : ""}" data-filter="${c.key}">${c.label}</button>`
      )
      .join("");
  }
  const chips = Array.from(document.querySelectorAll(".chip"));

  function initials(name) {
    return name
      .replace(/^(the|el|la)\s+/i, "")
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  function esc(str) {
    return String(str).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );
  }

  function render() {
    const q = (searchInput && searchInput.value || "").trim().toLowerCase();
    const matches = STORES.filter((s) => {
      const matchCat = activeFilter === "all" || s.category === activeFilter;
      const matchText =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.cat.toLowerCase().includes(q) ||
        (s.desc && s.desc.toLowerCase().includes(q));
      return matchCat && matchText;
    });

    const visible = matches.slice(0, limit);

    grid.innerHTML = visible
      .map((s, i) => {
        const color = CAT_COLORS[s.category] || "#15606f";
        const isOpen = s.status === "open";
        const logo = isOpen ? initials(s.name) : "✦";
        const meta = isOpen
          ? `<span class="badge badge-open">📍 ${esc(s.suite || "Now open")}</span>`
          : `<span class="badge badge-soon">Coming soon</span>`;
        return `
        <li class="store-card${isOpen ? " is-open" : ""}" style="animation-delay:${Math.min(i * 0.04, 0.4)}s">
          <span class="store-logo" style="background:${color}">${esc(logo)}</span>
          <span class="cat">${esc(s.cat)}</span>
          <h3>${esc(s.name)}</h3>
          <p class="desc">${esc(s.desc || "")}</p>
          <p class="meta">${meta}</p>
        </li>`;
      })
      .join("");

    if (noResults) noResults.hidden = matches.length > 0;
    if (countEl) {
      const showing = visible.length;
      const total = matches.length;
      countEl.textContent =
        total === 0
          ? ""
          : limit < total
          ? `Showing ${showing} of ${total} stores`
          : `${total} store${total === 1 ? "" : "s"}`;
    }
  }

  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      activeFilter = chip.dataset.filter;
      render();
    })
  );

  if (searchInput) searchInput.addEventListener("input", render);

  render();
})();
