import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Antonio Knezovic | Portfolio",
  description:
    "This is my portfolio website, where you can contact me and check my latest work.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.png",
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  authors: [
    {
      name: "Antonio Knezovic",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://antonioknezovic.dev",
    title: "Antonio Knezovic | Portfolio",
    description:
      "This is my portfolio website, where you can contact me and check my latest work.",
    siteName: "Antonio Knezovic | Portfolio",
    images: "https://antonioknezovic.dev/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
