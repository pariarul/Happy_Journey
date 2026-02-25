import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "HappyJourney - Premium Travels & Tourism",
  description: "Experience luxury travel with HappyJourney. Domestic & International Tour Packages, Honeymoons, Cruises, and Destination Weddings.",
  keywords: "travel, tourism, honeymoon, cruises, tour packages, destination weddings, luxury travel, domestic tours, international tours",
  author: "HappyJourney",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "HappyJourney - Premium Travels & Tourism",
    description: "Experience luxury travel with HappyJourney. Domestic & International Tour Packages, Honeymoons, Cruises, and Destination Weddings.",
    url: "https://www.happyjourney.com",
    siteName: "HappyJourney",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "HappyJourney Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@HappyJourney",
    title: "HappyJourney - Premium Travels & Tourism",
    description: "Experience luxury travel with HappyJourney. Domestic & International Tour Packages, Honeymoons, Cruises, and Destination Weddings.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans bg-gray-50 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}