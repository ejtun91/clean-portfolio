import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LinksLeft from "./components/LinksLeft";
import LinksRight from "./components/LinksRight";
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
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
