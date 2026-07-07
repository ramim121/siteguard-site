import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { DetectionFrame } from "@/components/detection-frame";
import { SectionHeading } from "@/components/section-heading";
import { IconMark } from "@/components/icon-mark";
import { howItWorks, outcomes, schools } from "@/lib/content";

export const metadata: Metadata = {
  title: "SiteGuard for Schools — AI-powered campus safety",
  description:
    "Turn the cameras a school already has into a 24/7 safety system. Eleven live AI detection models for weapons, fire, vaping, wandering and access — alerts in 0–3 seconds.",
};

const catLabel: Record<string, string> = {
  critical: "Critical Threats",
  hazard: "Hazard & Health",
  behaviour: "Behaviour & Wellbeing",
  access: "People & Access",
};

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Schools & Campuses · Live"
        title={
          <>
            AI-powered <span className="accent">campus safety.</span>
          </>
        }
        description={schools.lead}
        primaryCta={{ href: "/contact", label: "Book a school demo" }}
        secondaryCta={{ href: "#detections", label: "See the 11 models" }}
        visual={<DetectionFrame frame={schools.heroFrame} priority />}
      />

      {/* ---------------------------------------------------- Stats */}
      <section className="section section-ink section-compact">
        <div className="section-inner">
          <div className="stat-strip">
            {schools.stats.map((stat) => (
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
            title="A school is one of the hardest places to supervise."
            description="Traditional cameras record the past — they don't help anyone act in time."
          />
          <div className="timeline-grid">
            {schools.challenge.map((item) => (
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

      {/* ---------------------------------------------------- Detections */}
      <section className="section" id="detections">
        <div className="section-inner">
          <SectionHeading
            eyebrow="11 detection models"
            title="Detection capabilities, grouped by what they protect."
            description="Each model runs on the edge box, analysing every feed in real time — every alert carries the camera, a clip and a confidence score."
          />
          <div className="cat-legend reveal">
            {schools.categories.map((cat) => (
              <span className={`cat-tag c-${cat.key}`} key={cat.key}>
                <span className="dot" />
                {cat.label}
              </span>
            ))}
          </div>
          <div className="detect-grid">
            {schools.detections.map((d) => (
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
            title="Outcomes for schools."
            description="From faster response to a lighter staff load — what changes once SiteGuard is watching every corridor, gate and yard."
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

      {/* ---------------------------------------------------- Roadmap */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="On the roadmap · 8 in development"
            title="Eight more models in active training."
            description="Delivered as software updates to the same edge box, with no new hardware to install."
          />
          <div className="roadmap-grid">
            {schools.roadmap.map((item) => (
              <article className="roadmap-card reveal" key={item.num}>
                <span className="num">{item.num}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------- One platform, many industries */}
      <section className="section section-tinted section-compact">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Beyond schools"
            title="The same platform serves 30+ industries."
            description="The Safe School pack draws on a proprietary library of 400+ algorithms, proven across construction, industry, transport and more."
          />
          <figure className="bank-figure reveal">
            <Image
              src="/bank/library-arch.jpg"
              alt="SiteGuard proprietary AI visual analytics: 30+ industries and 400+ algorithms"
              width={1536}
              height={1024}
              sizes="(max-width: 1100px) 100vw, 1060px"
            />
          </figure>
        </div>
      </section>

      {/* ---------------------------------------------------- CTA */}
      <section className="section section-compact">
        <div className="section-inner">
          <div className="cta-panel reveal">
            <div>
              <span className="eyebrow">Protect every corridor</span>
              <h2 style={{ marginTop: 14 }}>
                Eleven AI models on the cameras you already have.
              </h2>
              <p>
                Book a demo and see SiteGuard for Schools running on a live campus
                feed — with a safeguarding pack tuned to your site.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button button-primary button-lg" href="/contact">
                Book a school demo
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
