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
    // Confirmed tenant
    { name: "Tacos al Carbon", category: "dining", cat: "Dining", desc: "Authentic Mexican tacos, grilled al carbon", suite: "Now open", status: "open" },

    // Fashion & Apparel — coming soon
    { name: "Women's Boutique", category: "fashion", cat: "Fashion", desc: "Apparel & accessories", status: "soon" },
    { name: "Menswear", category: "fashion", cat: "Fashion", desc: "Tailored & casual wear", status: "soon" },
    { name: "Shoes & Accessories", category: "fashion", cat: "Fashion", desc: "Footwear for the family", status: "soon" },
    { name: "Kids' Apparel", category: "fashion", cat: "Fashion", desc: "Children's clothing & shoes", status: "soon" },

    // Dining — coming soon
    { name: "Coffee & Café", category: "dining", cat: "Dining", desc: "Locally roasted coffee & pastries", status: "soon" },
    { name: "Bakery & Sweets", category: "dining", cat: "Dining", desc: "Cakes, cookies & treats", status: "soon" },
    { name: "Casual Dining", category: "dining", cat: "Dining", desc: "Family restaurant & patio", status: "soon" },

    // Home & Gifts — coming soon
    { name: "Home & Decor", category: "home", cat: "Home & Gifts", desc: "Furnishings & home goods", status: "soon" },
    { name: "Gifts & Stationery", category: "home", cat: "Home & Gifts", desc: "Cards, candles & gifts", status: "soon" },
    { name: "Florist", category: "home", cat: "Home & Gifts", desc: "Fresh flowers & arrangements", status: "soon" },

    // Health & Beauty — coming soon
    { name: "Salon & Spa", category: "health", cat: "Health & Beauty", desc: "Hair, skincare & wellness", status: "soon" },
    { name: "Nail Studio", category: "health", cat: "Health & Beauty", desc: "Manicures & pedicures", status: "soon" },
    { name: "Pharmacy & Wellness", category: "health", cat: "Health & Beauty", desc: "Pharmacy & everyday health", status: "soon" },

    // Services — coming soon
    { name: "Optical", category: "services", cat: "Services", desc: "Eye exams & eyewear", status: "soon" },
    { name: "Bank & ATM", category: "services", cat: "Services", desc: "Banking & cash services", status: "soon" },
    { name: "Mobile Repair", category: "services", cat: "Services", desc: "Phone & device repair", status: "soon" },
  ];

  /* category -> logo color (for the lettered logo tiles) */
  const CAT_COLORS = {
    fashion: "#15606f",
    dining: "#c8893f",
    home: "#0f4c5c",
    health: "#2f8f6b",
    services: "#5a6b70",
  };

  /* Filter chips, in order. "all" is added automatically by the UI. */
  const CATEGORIES = [
    { key: "fashion", label: "Fashion" },
    { key: "dining", label: "Dining" },
    { key: "home", label: "Home & Gifts" },
    { key: "health", label: "Health & Beauty" },
    { key: "services", label: "Services" },
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
