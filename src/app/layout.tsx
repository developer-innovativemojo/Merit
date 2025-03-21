import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";

import AosProvider from "@/components/Providers/Aos";
import Navbar from "@/components/NewLanding/NavbarLanding";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Merit",
  description: "Merit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Navbar />
        <AosProvider>{children}</AosProvider>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
