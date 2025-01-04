import type { Metadata } from "next";
import { Poppins, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// import { Toaster } from "react-hot-toast";
// import AuthSessionProvider from "@/lib/AuthSession";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "The Antique Collector",
  description:
    " The Antique Collector is a platform for antique collectors to buy and sell antiques.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${open_sans.variable}
        ${playfair_display.variable}
        `}
      >
        <NextTopLoader
          color="pink"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          showSpinner={false}
          crawl={true}
          easing="ease"
          speed={200}
          shadow="0 0 5px #2299DD,0 0 5px #2299DD"
        />
        <Navbar />
        {children}
        {/* <Toaster position="bottom-center" /> */}

        <Footer />
      </body>
    </html>
  );
}
