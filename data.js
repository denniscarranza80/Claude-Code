/* =============================================================
   Plaza La Cima — Shared content data
   Single source of truth for the store directory, dining, and
   events. Edit here and every page updates automatically.

   NOTE: Names, suites, hours and contact details below are
   realistic placeholders for a real-business build. Replace with
   the plaza's actual tenants/details — structure stays the same.
   ============================================================= */
(function (global) {
  "use strict";

  /* ---- Store directory ----
     category : machine key used for filtering
     cat      : human label shown on cards
     desc     : one-line description
     suite    : unit / location label
  */
  const STORES = [
    // Fashion & Apparel
    { name: "Magnolia & Co.", category: "fashion", cat: "Fashion", desc: "Women's boutique & accessories", suite: "Suite 110" },
    { name: "Cima Menswear", category: "fashion", cat: "Fashion", desc: "Tailored suiting & casual wear", suite: "Suite 112" },
    { name: "The Denim Bar", category: "fashion", cat: "Fashion", desc: "Premium jeans & wardrobe basics", suite: "Suite 118" },
    { name: "Little Rock Kids", category: "fashion", cat: "Fashion", desc: "Children's apparel & shoes", suite: "Suite 120" },
    { name: "Summit Shoe Co.", category: "fashion", cat: "Fashion", desc: "Footwear for the whole family", suite: "Suite 122" },

    // Dining
    { name: "Delta Roast Coffee", category: "dining", cat: "Dining", desc: "Locally roasted coffee & pastries", suite: "Food Hall" },
    { name: "The Catfish Co.", category: "dining", cat: "Dining", desc: "Southern comfort classics", suite: "Suite 200" },
    { name: "Sora Ramen Bar", category: "dining", cat: "Dining", desc: "Japanese ramen & small plates", suite: "Suite 205" },
    { name: "Pinnacle Pizza", category: "dining", cat: "Dining", desc: "Wood-fired pizza & pasta", suite: "Suite 210" },
    { name: "Verdure", category: "dining", cat: "Dining", desc: "Fresh salads, bowls & juices", suite: "Food Hall" },
    { name: "Sweet Magnolia Bakery", category: "dining", cat: "Dining", desc: "Cakes, cookies & celebration treats", suite: "Suite 214" },
    { name: "El Mirador Cantina", category: "dining", cat: "Dining", desc: "Tacos, margaritas & riverfront patio", suite: "Suite 218" },

    // Home & Gifts
    { name: "River City Home", category: "home", cat: "Home & Gifts", desc: "Furniture & home decor", suite: "Suite 130" },
    { name: "The Paper Lark", category: "home", cat: "Home & Gifts", desc: "Stationery, candles & gifts", suite: "Suite 132" },
    { name: "Bloom Florals", category: "home", cat: "Home & Gifts", desc: "Fresh flowers & arrangements", suite: "Suite 134" },
    { name: "Arkansas Made", category: "home", cat: "Home & Gifts", desc: "Local artisan goods & crafts", suite: "Suite 136" },

    // Health & Beauty
    { name: "Glow Skincare Studio", category: "health", cat: "Health & Beauty", desc: "Facials, waxing & skincare", suite: "Suite 150" },
    { name: "Clip & Co. Salon", category: "health", cat: "Health & Beauty", desc: "Hair styling & color", suite: "Suite 152" },
    { name: "Polished Nail Bar", category: "health", cat: "Health & Beauty", desc: "Manicures & pedicures", suite: "Suite 154" },
    { name: "Pinnacle Pharmacy", category: "health", cat: "Health & Beauty", desc: "Pharmacy & wellness essentials", suite: "Suite 156" },

    // Services
    { name: "La Cima Optical", category: "services", cat: "Services", desc: "Eye exams & designer eyewear", suite: "Suite 160" },
    { name: "QuickFix Mobile", category: "services", cat: "Services", desc: "Phone & device repair", suite: "Suite 162" },
    { name: "First Arkansas Bank", category: "services", cat: "Services", desc: "Full-service branch & ATM", suite: "Suite 164" },
    { name: "The Mail Room", category: "services", cat: "Services", desc: "Shipping, printing & postal", suite: "Suite 166" },
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

  /* ---- Dining highlights (Dining page cards) ---- */
  const DINING = [
    { name: "El Mirador Cantina", cuisine: "Mexican", price: "$$", desc: "Street tacos, house margaritas and the plaza's best riverfront patio.", ph: "ph-5" },
    { name: "Sora Ramen Bar", cuisine: "Japanese", price: "$$", desc: "Slow-simmered broths, hand-pulled noodles and seasonal small plates.", ph: "ph-1" },
    { name: "The Catfish Co.", cuisine: "Southern", price: "$$", desc: "Crispy catfish, hushpuppies and comfort plates done right.", ph: "ph-4" },
    { name: "Pinnacle Pizza", cuisine: "Italian", price: "$$", desc: "Naples-style wood-fired pizza, fresh pasta and Arkansas wines.", ph: "ph-3" },
    { name: "Delta Roast Coffee", cuisine: "Café", price: "$", desc: "Single-origin coffee, espresso and fresh-baked pastries each morning.", ph: "ph-2" },
    { name: "Verdure", cuisine: "Healthy", price: "$", desc: "Build-your-own salads, grain bowls and cold-pressed juices.", ph: "ph-6" },
  ];

  /* ---- Events ----
     date: ISO date used for sorting + the date chip
  */
  const EVENTS = [
    { date: "2026-06-12", title: "Riverfront Live: Friday Music Series", time: "6–9 PM", place: "Center Court", desc: "Local bands, food trucks and a golden-hour view of the Arkansas River.", tag: "Live Music" },
    { date: "2026-06-20", title: "Saturday Farmers Market", time: "8 AM–1 PM", place: "East Promenade", desc: "Arkansas produce, fresh flowers, bakers and makers every Saturday.", tag: "Market" },
    { date: "2026-07-04", title: "Independence Day Family Festival", time: "4–10 PM", place: "The Plaza", desc: "Lawn games, local vendors and a riverside view of the city fireworks.", tag: "Festival" },
    { date: "2026-07-18", title: "Sip & Shop Night Market", time: "5–9 PM", place: "Center Court", desc: "Extended shopping hours, local art, live DJ and tastings from our restaurants.", tag: "Night Market" },
    { date: "2026-08-09", title: "Back-to-School Bash", time: "11 AM–3 PM", place: "Center Court", desc: "Family activities, giveaways and in-store specials to start the year right.", tag: "Family" },
    { date: "2026-08-23", title: "Makers & Vintage Fair", time: "10 AM–4 PM", place: "East Promenade", desc: "Curated vintage, handmade goods and one-of-a-kind finds from regional sellers.", tag: "Market" },
  ];

  global.PLAZA = { STORES, CAT_COLORS, CATEGORIES, DINING, EVENTS };
})(window);
