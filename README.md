# Friends Taxi — Redesigned Website (Karur Friends Track Call Taxi)

A fast, refined, production-grade web application for **Karur Friends Track Call Taxi** combining a disciplined **Neo-Brutalist** aesthetic with subtle **Glassmorphism**, floating ambient orbs, lightweight scroll parallax, full **Tamil (தமிழ்) and English** bilingual support, and mobile-first responsive architecture.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## How to Run the Website

### Prerequisites
- Node.js (v18.18+ or v20+ recommended)
- npm or yarn / pnpm

### Quick Start
```bash
# 1. Navigate to the project directory
cd D:\AAA_Projects\FriendsTaxi\friendstaxi

# 2. Run the development server
npm run dev

# 3. Open your browser
# Visit: http://localhost:3000
```

### Production Build & Test
```bash
# Build optimized static and server bundle
npm run build

# Start the production server
npm run start
```

---

## How to Edit Content & Tamil (தமிழ்) Translations

All website copy is strictly centralized in a single structured configuration file to ensure translations never break layout or get scattered across components:

**`src/lib/translations.ts`**

### Structure:
```typescript
export const translations = {
  ta: {
    hero_headline: "நம்பகமான வாடகை கார் சேவை, எப்போதும் உங்கள் பயணத்திற்கு.",
    hero_sub: "கரூர் மற்றும் தமிழ்நாடு முழுவதும் பாதுகாப்பான, அமைதியான பயணம்...",
    // ... all Tamil strings (Tamil is the primary default language)
  },
  en: {
    hero_headline: "Your Trusted Taxi Service, Ready When You Are.",
    hero_sub: "Safe, punctual, and cost-saving journeys across Karur and Tamil Nadu...",
    // ... all English strings
  }
};
```

To update any text:
1. Open `src/lib/translations.ts`.
2. Find the corresponding key in both `ta` and `en` objects.
3. Save the file — the website will hot-reload instantly.

---

## Design System & Colors (Sampled Directly from Logo)

- **Dominant Royal Blue (`#0A45B8` / `#0048B5`)**: Sampled from the logo's oval badge. Used for brand headers, primary badges, and key accents.
- **Deep Midnight Navy (`#080A55`)**: Sampled from the logo's inner borders. Used for trust strip, badges, and footer backgrounds.
- **Taxi Golden Yellow (`#FFCE00`)**: Sampled from the logo's checkered 'F' and brand lettering. Used for high-priority calls to action and focal highlights.
- **Clean Neutrals (`#FFFFFF`, `#F8FAFC`, `#0A0F1D`)**: Ample white and slate breathing room providing high WCAG AAA readability and contrast.
- **Refined Neo-Brutalism**: Strict 2px solid black borders, 3px–4px crisp zero-blur offset drop shadows (`3px 3px 0px #000`, `4px 4px 0px #000`), disciplined grid alignment, and no cartoonish rotated stickers or neon rainbow colors.

---

## Key Revisions and Improvements

1. **Professional, Refined Look (Fixes Cartoonish Appearance)**:
   - Eliminated rotated sticker badges, childish angles, and playful tilting.
   - Removed saturated neon cyan and magenta color blocks; replaced with disciplined palette sampled from the official logo.
   - Replaced frantic marquee ticker with a slim, restrained trust strip highlighting key facts from the original site (Est. 2009, 24/7 service, Karur, Chennai, Bangalore, Puducherry coverage).
   - Replaced mock phone/app graphics with real vehicle and service imagery from the original website.
   - Restrained typography scale with comfortable Tamil line-height and no awkward wrapping.

2. **Zero Emojis Policy**:
   - Replaced all emojis across the site with a unified inline SVG icon library (`src/components/Icons.tsx`).
   - SVG icons include phone handset, WhatsApp logo, location pin, GPS target, car, clock, passenger group, checkmark, star rating, globe, stepper plus/minus, alert circle, and directional arrows.
   - Automated scan verifies 0 emoji Unicode code points across all source and content files.

3. **Mobile-First Responsive Optimization**:
   - Tested across viewports: 320px, 360px, 390px, 414px, 768px, 1024px, and 1440px.
   - Zero horizontal overflow or clipped text in both Tamil and English.
   - Minimum 44px touch targets on all interactive elements.
   - Clean, full-width mobile navigation drawer with large tap targets.
   - Bottom padding (`pb-24 sm:pb-14`) ensures fixed WhatsApp and phone buttons never obstruct inputs, submit buttons, or footer links.
   - Parallax and ambient floating orbs automatically disable on mobile screens (< 768px) and when `prefers-reduced-motion` is active.

4. **User-Friendly Booking Section**:
   - Single focused card with fields in strict logical order: Name -> Phone Number -> Pick-up Location -> Drop-off Location -> Number of Members -> Send Booking.
   - Visible labels above all inputs (placeholders are not labels).
   - Number of members field features a clean stepper (minus, number, plus) with limits (1 to 15).
   - Pick-up includes "Use My Location" (free OpenStreetMap Nominatim reverse geocoding with graceful error fallbacks).
   - Drop-off includes debounced address suggestions and quick-pick chips for popular regional hubs.
   - Inline validation activates on blur (`onBlur`), preserving user input and focusing the first invalid field rather than showing an intimidating wall of errors.
   - Reassurance line citing verified facts from the original 2009 website.

---

## Verified Business Contact Details (From Original Site)

- **Business Name:** Karur Friends Track Call Taxi
- **Establishment:** Year 2009
- **Landline Numbers:** 04324 - 235000 / 04324 - 235300
- **24/7 Mobile / WhatsApp Hotline:** +91 7339340800
- **Email:** friendstrackcalltaxikarur@gmail.com
- **Physical Address:** 2nd Floor, R.K. Complex, Thulir Pharmacy Upstairs, 04, Opp. Double Tank Road, Karur, Tamil Nadu 639004
