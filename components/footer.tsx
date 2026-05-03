import Link from "next/link";
import { IconMark } from "@/components/icon-mark";
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
            <h3>Contact</h3>
            <div className="footer-contact-stack footer-contact-stack-compact">
              <div className="footer-contact-row">
                <div className="footer-contact-item">
                  <div className="card-icon card-icon-footer">
                    <IconMark name="user" />
                  </div>
                  <p>Md Ashraf Siddiquee</p>
                </div>
                <div className="footer-contact-item">
                  <div className="card-icon card-icon-footer">
                    <IconMark name="phone" />
                  </div>
                  <p>{footerInfo.phone}</p>
                </div>
              </div>
              <div className="footer-contact-item footer-contact-address">
                <div className="card-icon card-icon-footer">
                  <IconMark name="mapPin" />
                </div>
                <p>{footerInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-inner footer-bottom">
        <p>© 2025 NYK Advance Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
