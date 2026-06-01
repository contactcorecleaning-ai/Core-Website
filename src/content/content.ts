// ============================================================
// CONTENT.TS — Edit this file to update prices, text, services
// No JSX or coding knowledge needed. Just change the values.
// ============================================================

export const SITE = {
  name: 'Core Cleaning Services',
  phone: '(437) 603-8880',
  phoneHref: 'tel:4376038880',
  email: 'contact.corecleaning@gmail.com',
  whatsapp: 'https://wa.me/14376038880?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20cleaning%20services',
  instagram: 'https://www.instagram.com/core_cleaning.services',
  instagramHandle: '@core_cleaning.services',
  booking: 'https://clienthub.getjobber.com/hubs/ef64eda2-0407-4230-9fbb-acb064aec427/public/requests/2110113/new?utm_source=yelp',
  canonical: 'https://www.corecleaningservices.ca',
  hours: '07:00 – 21:00, every day',
  googleRating: '5.0',
  reviewCount: '47',
}

export const META = {
  title: 'Core Cleaning Services | Toronto & GTA House Cleaning',
  description: "Toronto's top-rated residential and commercial cleaning. Flat-rate pricing, 5-star Google rating, no hidden fees. Serving Toronto, Mississauga, Vaughan & all GTA. Book instantly online.",
  keywords: 'cleaning services Toronto, house cleaning Toronto, deep cleaning GTA, move in cleaning Toronto, commercial cleaning Toronto, maid service Toronto, cleaning company GTA, Airbnb cleaning Toronto',
  ogImage: 'https://www.corecleaningservices.ca/og-image.jpg',
}

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing',  href: '#pricing' },
  { label: 'Reviews',  href: '#reviews' },
  { label: 'Areas',    href: '#areas' },
  { label: 'FAQ',      href: '#faq' },
  { label: 'Contact',  href: '#quote' },
]

export const SERVICES = [
  {
    num: '01',
    name: 'Standard / Regular',
    description: 'Routine cleaning to maintain your space. Dusting, vacuuming, mopping, kitchen and bathroom maintenance.',
    price: 'From $149',
    highlight: false,
  },
  {
    num: '02',
    name: 'Deep Cleaning',
    description: 'Top-to-bottom cleaning. Ideal for first-time clients, seasonal resets, or any space needing thorough attention.',
    price: 'From $195',
    highlight: false,
  },
  {
    num: '03',
    name: 'Move-In / Move-Out',
    description: 'Full detail including oven, fridge, microwave and cabinets. For landlords, tenants and realtors.',
    price: 'From $265',
    highlight: false,
  },
  {
    num: '04',
    name: 'Airbnb / Short-Term Rental',
    description: 'Guest-ready turnovers that protect your ratings. Flexible scheduling around your calendar.',
    price: 'Custom quote',
    highlight: false,
  },
  {
    num: '05',
    name: 'Commercial',
    description: 'Offices, retail spaces and commercial properties. Reliable, consistent, discreet.',
    price: 'Custom quote',
    highlight: false,
  },
  {
    num: '06',
    name: 'Post-Construction',
    description: 'Specialized cleaning after construction or renovation. Free site assessment required.',
    price: '$55/hr per cleaner',
    highlight: false,
  },
  {
    num: '07',
    name: 'Hourly Cleaning',
    description: 'Flexible hourly booking with a professional 2-cleaner team. Partial cleans or maintenance sessions.',
    price: '$80/hr · 2-cleaner team',
    highlight: true,
  },
  {
    num: '08',
    name: 'Carpet, Furniture & Upholstery',
    description: 'Deep cleaning for carpets, sofas, chairs and upholstered surfaces. Refresh and restore your fabrics to like-new condition.',
    price: 'From $149',
    highlight: false,
  },
  {
    num: '09',
    name: 'BBQ Cleaning',
    description: 'Full degreasing and deep clean of your barbecue — grates, burners, drip trays and exterior. Ready for your next cookout.',
    price: 'From $219',
    highlight: false,
  },
  {
    num: '10',
    name: 'Pressure Washing',
    description: 'High-pressure washing for driveways, decks, patios, siding and more. Remove dirt, mold and grime from exterior surfaces.',
    price: 'From $99',
    highlight: false,
  },
]

export const WHY_US = [
  {
    title: 'Transparent pricing',
    body: "Clear, upfront pricing tailored to your cleaning needs — no hidden fees, upsells, or surprises.",
  },
  {
    title: 'Vetted professionals',
    body: 'Our team is carefully selected, trained and trusted with unsupervised access to your home.',
  },
  {
    title: '5.0 Google rating',
    body: "A perfect score from every client we've served. Consistency is not an accident.",
  },
  {
    title: 'Same-week availability',
    body: 'We serve the full GTA and are typically available within two to three days of booking.',
  },
]

export const REVIEWS = [
  {
    text: "After a party, my place and sofa was a mess. I found Core Cleaning on Instagram and booked them. Everything was easy, the price was fair, and my sofa was saved. We'll definitely use their services again.",
    name: 'Anastasia Klymenko',
    date: '4 months ago',
  },
  {
    text: 'After a bad experience elsewhere, I was hesitant. Core Cleaning completely changed my expectations — professional, on time, very thorough. The kitchen and bathroom look brand new again.',
    name: 'Freya Magic',
    date: '3 months ago',
  },
  {
    text: "Core Cleaning did an amazing job at my mom's house. Two cleaners came and were professional and thorough. The results exceeded expectations — I signed up for recurring cleanings on the spot.",
    name: 'Sarah Miles',
    date: '4 months ago',
  },
]

export const AREAS = [
  'Toronto', 'North York', 'Etobicoke', 'Mississauga',
  'Scarborough', 'Vaughan', 'Markham', 'Brampton',
  'Richmond Hill', 'Oakville',
]

export const AREA_TABLE = [
  { city: 'Toronto / Downtown', services: 'All services' },
  { city: 'North York',         services: 'All services' },
  { city: 'Etobicoke',          services: 'All services' },
  { city: 'Mississauga',        services: 'All services' },
  { city: 'Scarborough',        services: 'All services' },
  { city: 'Vaughan / Markham',  services: 'All services' },
  { city: 'Outside GTA',        services: 'Contact us' },
]

export const FAQS = [
  {
    q: "What's included in a standard clean?",
    a: 'Dusting all surfaces, vacuuming and mopping floors, bathroom cleaning (toilet, sink, shower/tub), kitchen cleaning (counters, stovetop, sink, appliance exteriors), and general tidying. Oven, fridge and windows are available as add-ons.',
    defaultOpen: true,
  },
  {
    q: 'Do I need to be home during the clean?',
    a: 'Not at all. Many clients provide a key, door code or concierge access. We are fully insured and trusted with unsupervised access.',
    defaultOpen: false,
  },
  {
    q: 'Are your products safe for pets and children?',
    a: 'Yes. We use eco-friendly, non-toxic products. Let us know about any sensitivities when booking.',
    defaultOpen: false,
  },
  {
    q: 'How does flat-rate pricing work?',
    a: 'You see the price upfront based on home size and service type. No clock running — we work until the job is done right.',
    defaultOpen: false,
  },
  {
    q: 'How do I reschedule or cancel?',
    a: 'Call or text us at (437) 603-8880 or log in to your client hub. We ask for at least 24 hours notice.',
    defaultOpen: false,
  },
  {
    q: 'Do you bring your own supplies?',
    a: "Yes — our team arrives fully equipped. You don't need to provide anything.",
    defaultOpen: false,
  },
]

export const FOOTER_SERVICES = [
  { label: 'Standard / Regular',    href: '#services' },
  { label: 'Deep Cleaning',         href: '#services' },
  { label: 'Move-In / Move-Out',    href: '#services' },
  { label: 'Airbnb Turnover',       href: '#quote' },
  { label: 'Hourly Cleaning',       href: '#pricing' },
  { label: 'Commercial',            href: '#quote' },
  { label: 'Post-Construction',     href: '#quote' },
  { label: 'Carpet & Upholstery',   href: '#pricing' },
  { label: 'BBQ Cleaning',          href: '#quote' },
  { label: 'Pressure Washing',      href: '#quote' },
]

export const FOOTER_COMPANY = [
  { label: 'Why Us',       href: '#whyus' },
  { label: 'Reviews',      href: '#reviews' },
  { label: 'Service Areas',href: '#areas' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Contact',      href: '#quote' },
]

// ─── Calculator Pricing Data ──────────────────────────────────────────────────
// Edit base prices, surcharges, add-on prices below.

export const HOURLY_RATE_PER_CLEANER = 45   // ×2 cleaners = $90/hr total

// Per-unit overflow prices when beds > 3 or baths > 2
export const EXTRA_BED     = 20   // regular & deep
export const EXTRA_BATH    = 35   // all services
export const EXTRA_MIO_BED = 15   // move-in/out only

export const HEAVY_SOILING = 120  // flat surcharge regardless of sqft tier

// Condo / Apartment base prices
export const CALC_BASE_CONDO: Record<string, Record<string, number>> = {
  regular:   { studio: 149, '1b1b': 159, '2b1b': 179, '2b2b': 189, '3b2b': 219 },
  deep:      { studio: 195, '1b1b': 235, '2b1b': 265, '2b2b': 295, '3b2b': 325 },
  moveinout: { studio: 265, '1b1b': 285, '2b1b': 315, '2b2b': 350, '3b2b': 365 },
}

// House / Townhouse base prices — identical structure, every entry +$30
export const CALC_BASE_HOUSE: Record<string, Record<string, number>> = {
  regular:   { studio: 179, '1b1b': 189, '2b1b': 209, '2b2b': 219, '3b2b': 249 },
  deep:      { studio: 225, '1b1b': 265, '2b1b': 295, '2b2b': 325, '3b2b': 355 },
  moveinout: { studio: 295, '1b1b': 315, '2b1b': 345, '2b2b': 380, '3b2b': 395 },
}

export const CALC_TIERS = [
  { id: 'base',      s: 0   },
  { id: '1000-1499', s: 80  },
  { id: '1500-1999', s: 150 },
  { id: '2000-2499', s: 220 },
  { id: '2500-2999', s: 290 },
  { id: '3000+',     s: 360 },
]

// Indexed by bedroom count (0 = studio, up to 6)
export const CALC_WIN_P = [69, 69, 69, 119, 119, 149, 149]

export const FREQ_OPTIONS = [
  { label: 'One-time',    value: 1,    disc: 0  },
  { label: 'Monthly',     value: 0.95, disc: 5  },
  { label: 'Tri-weekly',  value: 0.90, disc: 10 },
  { label: 'Bi-weekly',   value: 0.88, disc: 12 },
  { label: 'Weekly',      value: 0.85, disc: 15 },
]

export const SVC_LABELS: Record<string, string> = {
  regular:   'Regular clean',
  deep:      'Deep clean',
  moveinout: 'Move-in/Move-out',
  bbq:       'BBQ Cleaning',
  pressure:  'Pressure Washing',
}

export const BBQ_PANEL = {
  title: 'BBQ Cleaning',
  body:  "BBQ Cleaning starts from $199. For an exact quote based on your BBQ size and condition, get in touch — we'll get back to you within 2 hours.",
  btn1:  'Request a Quote',
  btn2:  'WhatsApp Us',
}

export const PRESSURE_PANEL = {
  title: 'Pressure Washing',
  body:  "For Pressure Washing pricing, please get in touch — we'll provide a custom quote based on your specific needs and surface area.",
  btn1:  'Request a Quote',
  btn2:  'WhatsApp Us',
}

export const ADDON_PRICES = {
  pet:     29,
  oven:    69,
  fridge:  49,
  blinds:  39,
  walls:   59,
  doors:   39,
  dish:    39,
  carpet1: 100,
  carpetX: 70,
  sofaS:   129,
  sofaL:   200,
  laundry: 25,
  dishLoad:25,
}
