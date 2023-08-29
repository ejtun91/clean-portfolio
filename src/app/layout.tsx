"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LinksLeft from "./components/LinksLeft";
import LinksRight from "./components/LinksRight";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Antonio Knezovic",
  description:
    "This is my portfolio website, where you can contact me and check my latest work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disableSpinner, setDisableSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisableSpinner(false);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        {disableSpinner ? (
          <SplashScreen />
        ) : (
          <>
            {" "}
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <LinksLeft />
            <main
              onClick={() => setMenuOpen(false)}
              className={`${
                menuOpen ? "z-30 relative blur-sm md:blur-none" : ""
              } `}
            >
              {children}
            </main>{" "}
            <LinksRight />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
