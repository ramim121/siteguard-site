import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SiteGuard AI",
  description:
    "AI-powered visual intelligence for site safety, compliance, and real-time supervision across existing CCTV networks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <div className="site-shell">
          <div className="ambient ambient-one" />
          <div className="ambient ambient-two" />
          <SiteHeader />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
