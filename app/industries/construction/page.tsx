import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { DetectionFrame } from "@/components/detection-frame";
import { SectionHeading } from "@/components/section-heading";
import { IconMark } from "@/components/icon-mark";
import { construction, howItWorks, outcomes } from "@/lib/content";

export const metadata: Metadata = {
  title: "SiteGuard for Construction — AI PPE, falls & intrusion",
  description:
    "Turn existing site CCTV into a 24/7 safety layer for construction — helmet and harness compliance, fall and intrusion detection, and vehicle discipline with alerts in 0–3 seconds.",
};

const catLabel: Record<string, string> = {
  critical: "Critical Threats",
  hazard: "PPE & Safety",
  behaviour: "Site Compliance",
  access: "People & Access",
};

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow={construction.kicker}
        title={
          <>
            Site safety, <span className="accent">enforced in real time.</span>
          </>
        }
        description={construction.lead}
        primaryCta={{ href: "/contact", label: "Book a site demo" }}
        secondaryCta={{ href: "#detections", label: "See the models" }}
        visual={<DetectionFrame frame={construction.heroFrame} priority />}
      />

      {/* ---------------------------------------------------- Stats */}
      <section className="section section-ink section-compact">
        <div className="section-inner">
          <div className="stat-strip">
            {construction.stats.map((stat) => (
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
            title="A live site is built to change — and hard to watch."
            description="Plant, height work and a rotating crew create risk faster than manual supervision can keep up with."
          />
          <div className="timeline-grid">
            {construction.challenge.map((item) => (
              <article className="timeline-card reveal" key={item.step}>
                <span className="timeline-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- How it works */}
      <section className="section section-tinted">
        <div className="section-inner">
          <SectionHeading
            eyebrow="How it works"
            title="Built on the cameras already on site."
            description="No new hardware in most cases. SiteGuard connects to existing site CCTV and turns passive recording into active, real-time protection."
          />
          <div className="timeline-grid">
            {howItWorks.map((step) => (
              <article className="timeline-card reveal" key={step.step}>
                <span className="timeline-step">STEP {step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Detections */}
      <section className="section" id="detections">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Construction Site pack"
            title="Detections tuned for the site, by what they protect."
            description="Each model runs on the edge box, analysing every feed in real time — every alert carries the camera, a clip and a confidence score."
          />
          <div className="cat-legend reveal">
            <span className="cat-tag c-critical"><span className="dot" /> Critical Threats</span>
            <span className="cat-tag c-hazard"><span className="dot" /> PPE & Safety</span>
            <span className="cat-tag c-behaviour"><span className="dot" /> Site Compliance</span>
            <span className="cat-tag c-access"><span className="dot" /> People & Access</span>
          </div>
          <div className="detect-grid">
            {construction.detections.map((d) => (
              <article className="detect-card reveal" key={d.model}>
                <DetectionFrame
                  frame={{
                    category: d.category,
                    cam: d.cam,
                    zone: d.zone,
                    timestamp: d.timestamp,
                    objectTag: d.objectTag,
                    model: d.model,
                    label: d.title,
                    confidence: d.confidence,
                    glyph: d.glyph,
                  }}
                />
                <div className="detect-body">
                  <span className={`cat-tag c-${d.category}`} style={{ alignSelf: "flex-start" }}>
                    <span className="dot" />
                    {catLabel[d.category]}
                  </span>
                  <h3>{d.title}</h3>
                  <p className="lead-line">{d.lead}</p>
                  <ul className="on-campus">
                    {d.onCampus.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="impact">
                    <b>Impact —</b> {d.impact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Outcomes */}
      <section className="section section-ink">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Why it matters"
            title="Outcomes for the site."
            description="From faster response to a lighter supervisory load — what changes once SiteGuard is watching every zone and access point."
          />
          <div className="outcome-grid">
            {outcomes.map((outcome) => (
              <article className="outcome-card reveal" key={outcome.title}>
                <span className="icon-tile">
                  <IconMark name={outcome.icon} />
                </span>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
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
              <span className="eyebrow">Protect every zone</span>
              <h2 style={{ marginTop: 14 }}>PPE, falls and intrusion — caught the moment they happen.</h2>
              <p>
                Book a demo and see SiteGuard running on a live site feed, with a
                Construction Site pack tuned to your zones.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button button-primary button-lg" href="/contact">
                Book a site demo
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
