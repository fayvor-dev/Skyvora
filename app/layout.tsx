import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoiseFilters from "@/components/NoiseFilters";
import InstallPrompt from "@/components/InstallPrompt";

export const metadata: Metadata = {
  title: "SKYVORA — Beyond The Ordinary",
  description:
    "Private aviation designed around your journey, your time, and your destination. Charter exceptional aircraft with SKYVORA.",
  metadataBase: new URL("https://skyvora.example"),
  manifest: "/manifest.json",
  openGraph: {
    title: "SKYVORA — Beyond The Ordinary",
    description:
      "Private aviation designed around your journey, your time, and your destination.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SKYVORA",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07070a",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-pearl min-h-screen flex flex-col">
        <NoiseFilters />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <InstallPrompt />
      </body>
    </html>
  );
}
