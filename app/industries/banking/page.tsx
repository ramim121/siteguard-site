import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { DetectionFrame } from "@/components/detection-frame";
import { SectionHeading } from "@/components/section-heading";
import { IconMark } from "@/components/icon-mark";
import { bank } from "@/lib/content";

export const metadata: Metadata = {
  title: "SiteGuard for Banking — Smart Banking AI Surveillance",
  description:
    "Real-time AI on the CCTV your branches, vaults and ATMs already run. Counter conduct, cash handling, ATM security and anti-fraud warnings — with bank-grade data security.",
};

export default function BankingPage() {
  return (
    <>
      <PageHero
        eyebrow={bank.kicker}
        title={
          <>
            Every bank camera, <span className="accent">now intelligent.</span>
          </>
        }
        description={bank.lead}
        primaryCta={{ href: "/contact", label: "Book a branch demo" }}
        secondaryCta={{ href: "#coverage", label: "See the coverage" }}
        visual={<DetectionFrame frame={bank.heroFrame} priority />}
      />

      {/* ---------------------------------------------------- Stats */}
      <section className="section section-ink section-compact">
        <div className="section-inner">
          <div className="stat-strip">
            {bank.stats.map((stat) => (
              <article className="stat-tile reveal" key={stat.lbl}>
                <div className="num">{stat.num}</div>
                <div className="lbl">{stat.lbl}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Challenge */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="The challenge"
            title="Cameras everywhere. Intelligence nowhere."
            description="Traditional CCTV only records the past — problems are found by chance, long after they happen."
          />
          <div className="timeline-grid">
            {bank.gaps.map((gap) => (
              <article className="timeline-card reveal" key={gap.step}>
                <span className="timeline-step">{gap.step}</span>
                <h3>{gap.title}</h3>
                <p>{gap.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Zones */}
      <section className="section section-tinted" id="coverage">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Four zones"
            title="One platform, tailored per area."
            description="Cameras and algorithms matched to what each zone of the branch needs to see."
          />
          <div className="pillar-grid">
            {bank.zones.map((zone) => (
              <article className="feature-card reveal" key={zone.name}>
                <span className="icon-tile">
                  <IconMark name={zone.icon} />
                </span>
                <h3>{zone.name}</h3>
                <p>{zone.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------- Image-led sections */}
      {bank.sections.map((section, index) => (
        <section
          className={index % 2 === 0 ? "section" : "section section-tinted"}
          key={section.id}
          id={section.id}
        >
          <div className="section-inner">
            <div className="section-heading reveal">
              <span className="eyebrow">{section.eyebrow}</span>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <figure className="bank-figure reveal">
              <Image
                src={section.image}
                alt={section.alt}
                width={1672}
                height={941}
                sizes="(max-width: 1100px) 100vw, 1060px"
                priority={index === 0}
              />
            </figure>
          </div>
        </section>
      ))}

      {/* ---------------------------------------------------- Anti-fraud */}
      <section className="section section-ink">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Anti-fraud early warning"
            title="Signals from the branch and the ATM, combined."
            description={bank.fraud.description}
          />
          <div className="fraud-grid reveal">
            <div className="fraud-cell">
              <span className="fraud-label">Branch-side signals</span>
              <ul>
                {bank.fraud.branch.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
            <div className="fraud-core">
              <span className="icon-tile">
                <IconMark name="radar" />
              </span>
              <strong>AI fraud warning model</strong>
              <span className="fraud-flow">Branch → model → ATM</span>
            </div>
            <div className="fraud-cell">
              <span className="fraud-label">ATM-side signals</span>
              <ul>
                {bank.fraud.atm.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Security */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Bank-grade data security"
            title="The system stays on the internal network. Data does not leave."
            description="Your video and records stay inside the bank — non-sensitive reference data only, encrypted and logged."
          />
          <div className="timeline-grid">
            {bank.security.map((item, index) => (
              <article className="timeline-card reveal" key={item.title}>
                <span className="timeline-step">{`0${index + 1}`}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- ROI */}
      <section className="section section-tinted section-compact">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Value & ROI"
            title="Better on every metric — at a fraction of the cost."
          />
          <div className="stat-strip">
            {bank.roi.map((item) => (
              <article className="stat-tile reveal" key={item.lbl}>
                <div className="num">{item.num}</div>
                <div className="lbl">{item.lbl}</div>
                <p className="sub">{item.sub}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- CTA */}
      <section className="section section-compact">
        <div className="section-inner">
          <div className="cta-panel reveal">
            <div>
              <span className="eyebrow">Smart Banking</span>
              <h2 style={{ marginTop: 14 }}>Put SiteGuard on your branch cameras.</h2>
              <p>
                A live demo with the Smart Banking pack tuned to your branches,
                cash rooms and ATMs.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button button-primary button-lg" href="/contact">
                Book a branch demo
              </Link>
              <Link className="button button-secondary-ink button-lg" href="/industries">
                Other industries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
