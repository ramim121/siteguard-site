import Link from "next/link";
import type { ReactNode } from "react";

type Cta = { href: string; label: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  visual?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  visual,
}: PageHeroProps) {
  return (
    <section className="page-hero on-ink">
      <div className={visual ? "section-inner page-hero-inner" : "section-inner page-hero-inner single"}>
        <div className="hero-copy reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <Link className="button button-primary button-lg" href={primaryCta.href}>
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link className="button button-secondary button-lg" href={secondaryCta.href}>
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
        {visual ? <div className="hero-visual reveal">{visual}</div> : null}
      </div>
    </section>
  );
}
