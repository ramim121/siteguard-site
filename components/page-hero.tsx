import Link from "next/link";
import type { ReactNode } from "react";

type Cta = {
  href: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  compact?: boolean;
  visual?: ReactNode;
  panelTitle?: string;
  panelPoints?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  compact = false,
  visual,
  panelTitle = "Always-on outcomes",
  panelPoints = [
    "Existing CCTV. No new camera estate required.",
    "15+ event categories across safety, behavior, and security.",
    "Instant evidence clips and executive-ready reporting.",
  ],
}: PageHeroProps) {
  return (
    <section className={compact ? "hero hero-compact" : "hero"}>
      <div className="hero-shell">
        <div className="hero-backdrop" />
      </div>
      <div className="section-inner hero-inner">
        <div className="hero-copy reveal rise">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={primaryCta.href}>
              {primaryCta.label}
            </Link>
            <Link className="button button-secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="hero-aside">
          {!compact && panelPoints.length > 0 ? (
            <div className="glass-panel">
              <span className="eyebrow">{panelTitle}</span>
              <ul className="hero-list">
                {panelPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {visual}
        </div>
      </div>
    </section>
  );
}
