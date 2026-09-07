import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SKYVORA — Beyond The Ordinary",
  description:
    "Private aviation designed around your journey, your time, and your destination. Charter exceptional aircraft with SKYVORA.",
  metadataBase: new URL("https://skyvora.example"),
  openGraph: {
    title: "SKYVORA — Beyond The Ordinary",
    description:
      "Private aviation designed around your journey, your time, and your destination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-pearl min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
