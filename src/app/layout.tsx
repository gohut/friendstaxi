import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A45B8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://friendstrackcalltaxi.com"),
  title: "Karur Friends Track Call Taxi | 24/7 வாடகை கார் சேவை",
  description:
    "கரூர் பிரண்ட்ஸ் டிராக் கால் டாக்சி - 2009 முதல் தமிழ்நாடு, சென்னை, பெங்களூரு மற்றும் புதுச்சேரி முழுவதும் பாதுகாப்பான வாடகை கார் சேவை. 24/7 நேரடி முன்பதிவு. தொலைபேசி: 7339340800, லேண்ட்லைன்: 04324-235000.",
  keywords: [
    "Karur call taxi",
    "Friends Track Call Taxi",
    "கரூர் கால் டாக்சி",
    "Karur taxi booking",
    "cab service Karur",
    "Karur to Chennai taxi",
    "Karur to Bangalore taxi",
  ],
  authors: [{ name: "Karur Friends Track Call Taxi" }],
  icons: {
    icon: "/favicon-ft.png",
    shortcut: "/favicon-ft.png",
    apple: "/favicon-ft.png",
  },
  openGraph: {
    title: "Karur Friends Track Call Taxi | 24/7 Cab Service",
    description:
      "Most trusted and preferred taxi service in Karur, Tamil Nadu, Bangalore, Chennai, and Puducherry. Established in 2009.",
    url: "https://friendstrackcalltaxi.com",
    siteName: "Karur Friends Track Call Taxi",
    images: [
      {
        url: "/logoimg.png",
        width: 600,
        height: 250,
        alt: "Karur Friends Track Call Taxi Logo",
      },
    ],
    locale: "ta_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karur Friends Track Call Taxi",
    description: "24/7 Safe & Affordable Taxi Service in Karur & Tamil Nadu",
    images: ["/logoimg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Karur Friends Track Call Taxi",
    "alternateName": ["Friends Track", "கரூர் பிரண்ட்ஸ் டிராக் கால் டாக்சி"],
    "image": "/logoimg.png",
    "telephone": "+91-7339340800",
    "email": "friendstrackcalltaxikarur@gmail.com",
    "foundingDate": "2009",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd floor, R.k complex, Thulir pharmacy upstairs, 04, opposite Double Tank Road",
      "addressLocality": "Karur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "639004",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Karur",
      "Tamil Nadu",
      "Chennai",
      "Bangalore",
      "Puducherry"
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.facebook.com/share/1AKwYUJWxu/",
      "https://www.instagram.com/karur.friends.trackcalltaxi?igsh=MXRpMHRxYnQ0aDNuaw=="
    ]
  };

  return (
    <html lang="ta" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0A0F1D] antialiased selection:bg-[#FFCE00] selection:text-black">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
