import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({ subsets: ["latin"] });

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/clash_display/ClashDisplay-Semibold.woff",
      weight: "600",
    },
    {
      path: "../public/fonts/clash_display/ClashDisplay-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/clash_display/ClashDisplay-Bold.woff",
      weight: "700",
    },
    {
      path: "../public/fonts/clash_display/ClashDisplay-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-clashDisplay",
});

export const metadata: Metadata = {
  title: "Get Linked",
  description: "getlinked Tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${clashDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
