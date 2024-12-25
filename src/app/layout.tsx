import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EcoVenligFab - Sustainable Manufacturing Solutions",
  description: "Promoting eco-friendly and sustainable manufacturing practices. Join us in creating a greener future through sustainable fabrication.",
  keywords: "sustainable manufacturing, eco-friendly fabrication, green technology, sustainable solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
