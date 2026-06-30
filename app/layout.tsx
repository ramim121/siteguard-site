import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { RevealObserver } from "@/components/reveal-observer";

const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SiteGuard — Turn your cameras into a 24/7 AI safety system",
  description:
    "SiteGuard adds real-time AI to the CCTV you already have — 90+ detection models for threats, fire, PPE, behaviour, people and vehicles, with alerts in 0–3 seconds.",
  metadataBase: new URL("https://site-guard.ai"),
  openGraph: {
    title: "SiteGuard — Turn your cameras into a 24/7 AI safety system",
    description:
      "Real-time AI video analytics on the cameras you already have. 90+ detection models, any site.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main>{children}</main>
          <Footer />
        </div>
        <RevealObserver />
      </body>
    </html>
  );
}
