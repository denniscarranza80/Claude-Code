/* =============================================================
   Plaza La Cima — Dining & Events renderers
   Populates any [data-dining-grid] and [data-events-list]
   container from window.PLAZA. Respects an optional data-limit.
   ============================================================= */
(function () {
  "use strict";

  const data = window.PLAZA;
  if (!data) return;

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function esc(str) {
    return String(str).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );
  }

  /* ---- Dining cards ---- */
  document.querySelectorAll("[data-dining-grid]").forEach((grid) => {
    const limit = grid.dataset.limit ? parseInt(grid.dataset.limit, 10) : Infinity;
    grid.innerHTML = data.DINING.slice(0, limit)
      .map(
        (d, i) => `
        <li class="tile" data-reveal style="--reveal-delay:${Math.min(i * 0.06, 0.4)}s">
          <div class="tile-media ${esc(d.ph)} ph-pattern" role="img" aria-label="${esc(d.name)}"></div>
          <div class="tile-body">
            <span class="cat">${esc(d.cuisine)}</span>
            <h3>${esc(d.name)}</h3>
            <p>${esc(d.desc)}</p>
            <div class="tile-foot">
              <span class="price">${esc(d.price)}</span>
              <span>Open daily</span>
            </div>
          </div>
        </li>`
      )
      .join("");
  });

  /* ---- Events list ---- */
  document.querySelectorAll("[data-events-list]").forEach((list) => {
    const limit = list.dataset.limit ? parseInt(list.dataset.limit, 10) : Infinity;
    const sorted = [...data.EVENTS].sort((a, b) => a.date.localeCompare(b.date));
    list.innerHTML = sorted.slice(0, limit)
      .map((ev, i) => {
        const d = new Date(ev.date + "T00:00:00");
        const day = String(d.getDate()).padStart(2, "0");
        const mon = MONTHS[d.getMonth()];
        return `
        <li class="event" data-reveal style="--reveal-delay:${Math.min(i * 0.05, 0.35)}s">
          <time datetime="${esc(ev.date)}">
            <span class="day">${day}</span>
            <span class="mon">${mon}</span>
          </time>
          <div>
            <h3>${esc(ev.title)}</h3>
            <p>${esc(ev.time)} · ${esc(ev.place)} · ${esc(ev.desc)}</p>
          </div>
          <a class="btn btn-ghost event-cta" href="visit.html">Add to plans</a>
        </li>`;
      })
      .join("");
  });
})();
