"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brandmark" href="/">
          <span className="brandmark-kicker">
            <span className="brandmark-site">SITE</span>
            <span className="brandmark-guard">GUARD</span>
            <span className="brandmark-ai"> AI</span>
          </span>
          <span className="brandmark-caption">Visual intelligence for site safety</span>
        </Link>
        <nav className="top-nav" aria-label="Primary">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                className={isActive ? "nav-link nav-link-active" : "nav-link"}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link className="button button-primary header-cta" href="/contact">
          Book a demo
        </Link>
      </div>
    </header>
  );
}
