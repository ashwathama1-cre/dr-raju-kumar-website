import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Dr. Raju Kumar | Best Gastroenterologist in Lucknow",
  description:
    "Premium Gastroenterology, Liver Care, Endoscopy & Colonoscopy Clinic in Lucknow.",
  keywords: [
    "Gastroenterologist",
    "Liver Specialist",
    "Endoscopy",
    "Lucknow",
    "Dr. Raju Kumar",
    "Genesis Clinic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}