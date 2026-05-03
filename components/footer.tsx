import Link from "next/link";
import { footerInfo } from "@/lib/content";

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
          <p>{footerInfo.address}</p>
        </div>
        <div className="footer-meta">
          <div className="footer-links">
            <Link href="/product">Platform</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${footerInfo.email}`}>{footerInfo.email}</a>
            <a href={`tel:${footerInfo.phone}`}>{footerInfo.phone}</a>
            <a href={`https://${footerInfo.website}`} target="_blank" rel="noreferrer">
              {footerInfo.website}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
