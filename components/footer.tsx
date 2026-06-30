import Link from "next/link";
import { brand, footerInfo, footerSections } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <div className="footer-brand">
          <span className="wordmark">
            Site<span className="wm-guard">Guard</span>
          </span>
          <p className="footer-tagline">
            {brand.masterTagline} 90+ models, any site.
          </p>
        </div>

        {footerSections.map((section) => (
          <div className="footer-col" key={section.title}>
            <h3>{section.title}</h3>
            {section.links.map((link) => {
              const external =
                link.href.startsWith("http") || link.href.startsWith("mailto:");
              return external ? (
                <a
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="section-inner footer-bottom">
        <p>© 2026 SiteGuard · {footerInfo.developer}</p>
        <div className="footer-legal">
          <a href={`mailto:${footerInfo.email}`}>{footerInfo.email}</a>
          <span>{footerInfo.phone}</span>
        </div>
      </div>
    </footer>
  );
}
