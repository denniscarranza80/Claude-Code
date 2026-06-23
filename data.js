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
    // Anchor tenant — featured & highlighted (renders full-width, on top)
    {
      name: "La Cima Laundromat",
      category: "services", cat: "Services",
      desc: "Modern full-service laundromat with self-service machines, wash-dry-fold, free WiFi & a comfortable lounge.",
      status: "soon", featured: true,
      img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80"
    },

    // Confirmed open
    {
      name: "Tacos al Carbon",
      category: "dining", cat: "Dining",
      desc: "Authentic Mexican tacos grilled al carbon, fresh salsas & house favorites — plus fresh hand-made gelato and custom-brewed espresso drinks made to order.",
      suite: "Now open", status: "open",
      img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80"
    },

    // Coming soon tenants
    {
      name: "Chicken & Waffles",
      category: "dining", cat: "Dining",
      desc: "Southern-style chicken & waffles — crispy, golden, irresistible. Coming soon.",
      status: "soon",
      img: "assets/chicken-waffles.jpg", promo: true
    },
    {
      name: "Jewelry Store",
      category: "fashion", cat: "Fashion & Accessories",
      desc: "Fine jewelry, gifts & custom pieces.",
      status: "soon",
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Massage Parlor",
      category: "health", cat: "Health & Wellness",
      desc: "Relaxation & therapeutic massage services.",
      status: "soon",
      img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80"
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
    { name: "Tacos al Carbon", cuisine: "Mexican", desc: "Authentic tacos grilled al carbon, fresh salsas and house favorites — plus fresh hand-made gelato and custom-brewed espresso drinks made to order.", ph: "ph-5", status: "open" },
    { name: "Chicken & Waffles", cuisine: "Southern", desc: "Crispy, golden, irresistible Southern-style chicken & waffles. Made for you — coming soon.", img: "assets/chicken-waffles.jpg", promo: true, status: "soon" },
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
