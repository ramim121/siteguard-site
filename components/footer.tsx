import Link from "next/link";
import { footerInfo, footerSections } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <div className="footer-copy">
          <span className="footer-brand">SiteGuard AI</span>
          <p className="footer-developed">{footerInfo.developer}</p>
          <p>
            AI-powered visual intelligence for real-time safety, compliance,
            and operational supervision.
          </p>
          <div className="footer-address-block">
            <p>{footerInfo.address}</p>
            <p>{footerInfo.phone}</p>
            <p>{footerInfo.email}</p>
          </div>
        </div>
        <div className="footer-grid">
          {footerSections.map((section) => (
            <div className="footer-column" key={section.title}>
              <h3>{section.title}</h3>
              <div className="footer-links">
                {section.links.map((link) => {
                  const external = link.href.startsWith("http") || link.href.startsWith("mailto:");
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
            </div>
          ))}
          <div className="footer-column footer-column-accent">
            <h3>Developed by</h3>
            <p>NYK Advance Ltd.</p>
            <a href={`https://${footerInfo.website}`} target="_blank" rel="noreferrer">
              {footerInfo.website}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
