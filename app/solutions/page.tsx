import type { CSSProperties } from "react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { DetectionFrame } from "@/components/detection-frame";
import { SectionHeading } from "@/components/section-heading";
import { ScenarioExplorer } from "@/components/scenario-explorer";
import { IconMark } from "@/components/icon-mark";
import { detectionFamilies, sectionFrames, severityLevels } from "@/lib/content";

const solutionStats = [
  { num: "90+", lbl: "Detection models" },
  { num: "6", lbl: "Functional families" },
  { num: "12", lbl: "Scenario packs" },
  { num: "0–3s", lbl: "Event to alert" },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Detection library"
        title={
          <>
            90+ models, <span className="accent">one platform.</span>
          </>
        }
        description="SiteGuard's intelligence is a library of detection models, grouped into six functional families and packaged into pre-tuned scenario packs per environment."
        primaryCta={{ href: "/contact", label: "Discuss your use case" }}
        secondaryCta={{ href: "/industries", label: "Compare industries" }}
        visual={<DetectionFrame frame={sectionFrames[1]} priority />}
      />

      {/* ---------------------------------------------------- Stats */}
      <section className="section section-compact">
        <div className="section-inner">
          <div className="stat-strip stat-strip-4">
            {solutionStats.map((stat) => (
              <article className="stat-tile reveal" key={stat.lbl}>
                <div className="num">{stat.num}</div>
                <div className="lbl">{stat.lbl}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Families */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="By family"
            title="Six families carry colour and meaning."
            description="The brand presents the library by family — never as an undifferentiated list — so teams deploy what matters without complexity."
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
                  {family.models.map((model) => (
                    <span className="model-chip" key={model}>
                      {model}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Severity */}
      <section className="section section-tinted">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Severity & alerts"
            title="One severity language, everywhere."
            description="Every detection resolves to exactly one of four severities. That severity drives its colour, icon, sound and routing — identically across ticker, toasts, tables and dashboards."
          />
          <div className="severity-grid">
            {severityLevels.map((level) => (
              <article className="severity-card reveal" key={level.key}>
                <span className={`severity-pill s-${level.key}`}>
                  <span className={`sev-dot sev-${level.key}`} />
                  {level.code}
                </span>
                <h3>{level.name}</h3>
                <p>{level.description}</p>
                <span className="eg">{level.examples}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Scenario packs */}
      <section className="section section-ink">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Scenario packs"
            title="Pre-tuned bundles per environment."
            description="Select a pack to see the models it deploys and why it fits that setting. Each ships a curated subset of models, thresholds and zones as a software profile — with no new hardware."
          />
          <ScenarioExplorer />
        </div>
      </section>

      {/* ---------------------------------------------------- Deployment */}
      <section className="section">
        <div className="section-inner split">
          <div className="reveal">
            <SectionHeading
              eyebrow="Deployment"
              title="A technical layer built for the cameras you already run."
              description="SiteGuard deploys without replacing the existing video estate — combining camera ingest, switch pooling, edge AI compute and multi-surface access."
            />
            <ul className="check-list">
              <li>RTSP and ONVIF ingest across existing CCTV estates</li>
              <li>NVR and switch-based pooling for resilient multi-camera routing</li>
              <li>Edge AI box with media server and local data storage</li>
              <li>Web, admin and mobile access for multi-role teams</li>
            </ul>
          </div>
          <div className="reveal" style={{ display: "grid", gap: 18 }}>
            <DetectionFrame frame={sectionFrames[2]} />
            <DetectionFrame frame={sectionFrames[3]} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- CTA */}
      <section className="section section-compact">
        <div className="section-inner">
          <div className="cta-panel reveal">
            <div>
              <span className="eyebrow">Find your pack</span>
              <h2 style={{ marginTop: 14 }}>Tell us your site. We'll tune the models.</h2>
              <p>Get a scenario pack matched to your environment and risk profile.</p>
            </div>
            <div className="cta-actions">
              <Link className="button button-primary button-lg" href="/contact">
                Talk to us
              </Link>
              <Link className="button button-secondary-ink button-lg" href="/industries">
                Browse industries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
