"use client";

import { Poppins, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { createContext, useState, ReactNode } from "react";

// Font configurations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair-display",
  display: "swap",
});

// LayoutContext with a dynamic setter
export const LayoutContext = createContext<{
  hideNavbarFooter: boolean;
  setHideNavbarFooter: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  hideNavbarFooter: false,
  setHideNavbarFooter: () => {},
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [hideNavbarFooter, setHideNavbarFooter] = useState(false);



    // Combine static and dynamic class names
    const bodyClassName = [
      "base-styles", // Add global or static styles here
      poppins.variable,
      open_sans.variable,
      playfair_display.variable,
    ].join(" ");
  

  return (
    <html lang="en">
        <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>

      <body
        className={bodyClassName}
      >
        <LayoutContext.Provider value={{ hideNavbarFooter, setHideNavbarFooter }}>
          <NextTopLoader
            color="pink"
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            showSpinner={false}
            crawl={true}
            easing="ease"
            speed={200}
            shadow="0 0 5px #2299DD, 0 0 5px #2299DD"
          />
          {!hideNavbarFooter && <Navbar />}
          {children}
          {!hideNavbarFooter && <Footer />}
        </LayoutContext.Provider>
      </body>
    </html>
  );
}