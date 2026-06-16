/* =============================================================
   Plaza La Cima — Shared content data
   Single source of truth for the store directory, dining, and
   events. Edit here and every page updates automatically.

   STATUS NOTE: Plaza La Cima is under development. "Tacos al
   Carbon" is a confirmed tenant; the remaining entries are
   placeholders marked status:"soon" ("Coming soon"). Replace the
   placeholder name/desc/suite with each real tenant as leases are
   signed — the structure stays the same.
   ============================================================= */
(function (global) {
  "use strict";

  /* ---- Store directory ----
     category : machine key used for filtering
     cat      : human label shown on cards
     desc     : one-line description
     suite    : unit / location label (used when status === "open")
     status   : "open" (confirmed) | "soon" (coming soon)
  */
  const STORES = [
    // Confirmed open
    {
      name: "Tacos al Carbon",
      category: "dining", cat: "Dining",
      desc: "Authentic Mexican tacos grilled al carbon, fresh salsas & house favorites.",
      suite: "Now open", status: "open",
      img: "https://picsum.photos/seed/tacos-carbon-lr/600/380"
    },

    // Anchor tenant — featured & highlighted
    {
      name: "La Cima Laundromat",
      category: "services", cat: "Services",
      desc: "Modern full-service laundromat with self-service machines, wash-dry-fold, free WiFi & a comfortable lounge.",
      status: "soon", featured: true,
      img: "https://picsum.photos/seed/cima-laundromat/600/380"
    },

    // Coming soon tenants
    {
      name: "Chicken & Waffles",
      category: "dining", cat: "Dining",
      desc: "Southern-style chicken & waffles — name & details to be announced.",
      status: "soon",
      img: "https://picsum.photos/seed/chicken-waffles-plaza/600/380"
    },
    {
      name: "Jewelry Store",
      category: "fashion", cat: "Fashion & Accessories",
      desc: "Fine jewelry, gifts & custom pieces.",
      status: "soon",
      img: "https://picsum.photos/seed/jewelry-plaza-lr/600/380"
    },
    {
      name: "Massage Parlor",
      category: "health", cat: "Health & Wellness",
      desc: "Relaxation & therapeutic massage services.",
      status: "soon",
      img: "https://picsum.photos/seed/massage-wellness-lr/600/380"
    },

    // Available for lease
    {
      name: "Your Business Here",
      category: "leasing", cat: "Now Leasing",
      desc: "Prime retail space available — flexible sizes from 600 to 8,000 sq ft on Stagecoach Road.",
      status: "available"
    },
    {
      name: "Your Business Here",
      category: "leasing", cat: "Now Leasing",
      desc: "Join Tacos al Carbon and our growing family of Plaza La Cima tenants.",
      status: "available"
    },
  ];

  /* category -> logo color (for the lettered logo tiles) */
  const CAT_COLORS = {
    dining:   "#c8893f",
    services: "#15606f",
    fashion:  "#7a4f8b",
    health:   "#2f8f6b",
    leasing:  "#9aabb0",
  };

  /* Filter chips, in order. "all" is added automatically by the UI. */
  const CATEGORIES = [
    { key: "dining",   label: "Dining" },
    { key: "services", label: "Services" },
    { key: "fashion",  label: "Fashion" },
    { key: "health",   label: "Health & Wellness" },
    { key: "leasing",  label: "Now Leasing" },
  ];

  /* ---- Dining highlights (Dining page cards) ----
     One confirmed tenant + coming-soon concepts. Swap in real
     restaurants as they're announced.
  */
  const DINING = [
    { name: "Tacos al Carbon", cuisine: "Mexican", desc: "Authentic tacos grilled al carbon, fresh salsas and house favorites.", ph: "ph-5", status: "open" },
    { name: "Coffee & Café", cuisine: "Café", desc: "A local coffee and pastry spot to start the morning right.", ph: "ph-2", status: "soon" },
    { name: "Bakery & Sweets", cuisine: "Bakery", desc: "Fresh-baked breads, cakes and celebration treats.", ph: "ph-6", status: "soon" },
    { name: "Casual Dining", cuisine: "American", desc: "A relaxed sit-down restaurant for the whole family.", ph: "ph-3", status: "soon" },
    { name: "Quick Bites", cuisine: "Fast Casual", desc: "Grab-and-go counters for lunch on the move.", ph: "ph-1", status: "soon" },
    { name: "Sweet Treats", cuisine: "Dessert", desc: "Ice cream, paletas and after-dinner favorites.", ph: "ph-4", status: "soon" },
  ];

  /* ---- Events ----
     Placeholder programming for the plaza's opening season.
     date: ISO date used for sorting + the date chip
  */
  const EVENTS = [
    { date: "2026-09-12", title: "Grand Opening Celebration", time: "11 AM–6 PM", place: "Center Court", desc: "Music, family activities and tastings to mark the opening of Plaza La Cima.", tag: "Opening" },
    { date: "2026-09-26", title: "Saturday Market", time: "9 AM–1 PM", place: "The Promenade", desc: "Local produce, makers and flowers — a new Saturday tradition.", tag: "Market" },
    { date: "2026-10-10", title: "Fall Family Festival", time: "12–5 PM", place: "Center Court", desc: "Lawn games, vendors and seasonal fun for all ages.", tag: "Festival" },
    { date: "2026-10-24", title: "Live Music Friday", time: "6–9 PM", place: "Center Court", desc: "Local bands and food from the plaza's restaurants.", tag: "Live Music" },
    { date: "2026-11-14", title: "Makers & Vintage Fair", time: "10 AM–4 PM", place: "The Promenade", desc: "Handmade goods and one-of-a-kind finds from regional sellers.", tag: "Market" },
    { date: "2026-12-05", title: "Holiday Night Market", time: "5–9 PM", place: "Center Court", desc: "Extended shopping, holiday lights, treats and live music.", tag: "Night Market" },
  ];

  global.PLAZA = { STORES, CAT_COLORS, CATEGORIES, DINING, EVENTS };
})(window);
