import type { CSSProperties } from "react";
import Link from "next/link";
import { DetectionFrame } from "@/components/detection-frame";
import { CommandMock } from "@/components/platform-mocks";
import { IndustryShowcase } from "@/components/industry-showcase";
import { SectionHeading } from "@/components/section-heading";
import { IconMark } from "@/components/icon-mark";
import {
  brandPillars,
  detectionFamilies,
  heroFrames,
  homeMetrics,
  howItWorks,
  operationalPillars,
  outcomes,
  sectionFrames,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="hero on-ink">
        <div className="section-inner hero-inner">
          <div className="hero-copy reveal">
            <span className="eyebrow">AI video analytics</span>
            <h1>
              Every camera,
              <br />
              <span className="accent">now intelligent.</span>
            </h1>
            <p className="hero-lead">
              Turn the CCTV you already have into a real-time AI safety system —
              threats, fire, PPE and behaviour spotted in seconds, on any site.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary button-lg" href="/contact">
                Book a demo
              </Link>
              <Link className="button button-secondary button-lg" href="/product">
                See it work →
              </Link>
            </div>
            <div className="hero-trust">
              <span>
                <b>90+</b> detection models
              </span>
              <span>
                <b>0–3s</b> event to alert
              </span>
              <span>
                <b>0</b> new cameras
              </span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <DetectionFrame frame={heroFrames[0]} priority />
            <DetectionFrame frame={heroFrames[1]} className="mini-frame" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Metric band */}
      <section className="section section-ink section-compact">
        <div className="section-inner">
          <div className="metric-grid">
            {homeMetrics.map((metric) => (
              <article className="metric-card reveal" key={metric.label}>
                <span className="metric-value">{metric.value}</span>
                <h3>{metric.label}</h3>
                <p>{metric.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Brand pillars */}
      <section className="section section-tinted section-compact">
        <div className="section-inner">
          <SectionHeading
            center
            eyebrow="What we stand for"
            title="Five principles behind every detection."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 16,
            }}
          >
            {brandPillars.map((pillar) => (
              <article className="feature-card reveal" key={pillar.title} style={{ padding: "22px 20px" }}>
                <span className="icon-tile icon-tile-sm">
                  <IconMark name={pillar.icon} />
                </span>
                <h3 style={{ fontSize: 17 }}>{pillar.title}</h3>
                <p style={{ fontSize: 13.5 }}>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Active protection */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Why SiteGuard"
            title="Traditional CCTV only records the past."
            description="SiteGuard adds a layer of real-time AI that watches every feed at once, recognises danger as it happens, and gets the right alert to the right person in seconds."
          />
          <div className="pillar-grid">
            {operationalPillars.map((pillar) => (
              <article className="feature-card reveal" key={pillar.title}>
                <span className="icon-tile">
                  <IconMark name={pillar.icon} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Signature device */}
      <section className="section section-tinted">
        <div className="section-inner">
          <SectionHeading
            eyebrow="The signature device"
            title="AI is watching this, right now."
            description="Every detection resolves to one of four severities — driving its colour, icon and routing identically across the ticker, dashboards and the mobile app."
          />
          <div className="cat-legend reveal">
            <span className="cat-tag c-critical"><span className="dot" /> Critical</span>
            <span className="cat-tag c-hazard"><span className="dot" /> Hazard</span>
            <span className="cat-tag c-behaviour"><span className="dot" /> Behaviour</span>
            <span className="cat-tag c-access"><span className="dot" /> Access</span>
          </div>
          <div className="metric-grid">
            {sectionFrames.map((frame) => (
              <div className="reveal" key={frame.model}>
                <DetectionFrame frame={frame} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Product proof */}
      <section className="section">
        <div className="section-inner split">
          <div className="reveal">
            <SectionHeading
              eyebrow="One platform"
              title="Live feeds, alerts and reports in one calm command surface."
              description="From a multi-camera live wall to evidence-backed alerts and exportable analytics — every detection moves through a single, legible product experience."
            />
            <ul className="check-list">
              <li>Live multi-zone monitoring with AI labels on every feed</li>
              <li>Severity, camera, confidence and an evidence clip on every alert</li>
              <li>Alert trends, per-camera severity and detection distribution</li>
            </ul>
            <div className="hero-actions">
              <Link className="button button-primary" href="/product">
                Explore the platform
              </Link>
            </div>
          </div>
          <CommandMock />
        </div>
      </section>

      {/* --------------------------------------------------- How it works */}
      <section className="section section-tinted">
        <div className="section-inner">
          <SectionHeading
            eyebrow="How it works"
            title="Built on the cameras you already have."
            description="No new hardware in most cases. SiteGuard connects to existing CCTV and turns passive recording into active, real-time protection."
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

      {/* ---------------------------------------------------- Families */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Detection library"
            title="90+ models, six functional families."
            description="The intelligence is a library of detection models, grouped by family for colour and meaning, and packaged into pre-tuned scenario packs per environment."
          />
          <div className="family-grid">
            {detectionFamilies.map((family) => (
              <article
                className="family-card reveal"
                key={family.id}
                style={{ "--fam": family.color } as CSSProperties}
              >
                <div className="fam-head">
                  <span className="icon-tile">
                    <IconMark name={family.icon} />
                  </span>
                  <span className="count">{family.count}</span>
                </div>
                <h3>{family.name}</h3>
                <p style={{ color: "var(--sg-text-muted)", fontSize: 14 }}>
                  {family.description}
                </p>
                <div className="models">
                  {family.models.slice(0, 5).map((model) => (
                    <span className="model-chip" key={model}>
                      {model}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 36 }}>
            <Link className="button button-secondary" href="/solutions">
              View the full detection library
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Industries */}
      <section className="section section-tinted">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Where SiteGuard fits"
            title="Industry-agnostic — any site with cameras and a duty of care."
            description="The same platform fits every lead vertical through pre-tuned scenario packs deployed as software profiles."
          />
          <IndustryShowcase />
        </div>
      </section>

      {/* ---------------------------------------------------- Outcomes */}
      <section className="section section-ink">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Why it matters"
            title="What changes once SiteGuard is watching."
            description="From faster response to lighter staff load — the outcomes that move safety from reactive to proactive."
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

      {/* ------------------------------------------------------- CTA */}
      <section className="section section-compact">
        <div className="section-inner">
          <div className="cta-panel reveal">
            <div>
              <span className="eyebrow">Ready when you are</span>
              <h2 style={{ marginTop: 14 }}>Turn your cameras into a 24/7 safety system.</h2>
              <p>
                See SiteGuard running on a live feed and get a tailored scenario
                pack for your site.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button button-primary button-lg" href="/contact">
                Book a demo
              </Link>
              <Link className="button button-secondary-ink button-lg" href="/solutions">
                View all capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
