import Link from "next/link";
import Image from "next/image";
import {
  architectureSteps,
  homeHeroSignals,
  homeMetrics,
  industryHighlights,
  operationalPillars,
  workflowCarouselSlides,
} from "@/lib/content";
import { ImageCarousel } from "@/components/image-carousel";
import { IconMark } from "@/components/icon-mark";
import { SectionHeading } from "@/components/section-heading";

export default function HomePage() {
  const heroSignals = [
    { ...homeHeroSignals[0], icon: "camera" as const },
    { ...homeHeroSignals[1], icon: "radar" as const },
    { ...homeHeroSignals[2], icon: "bell" as const },
  ];

  return (
    <>
      <section className="surveillance-hero">
        <div className="section-inner surveillance-hero-inner">
          <div className="surveillance-hero-copy reveal rise">
            <span className="surveillance-kicker">CCTV surveillance AI system</span>
            <h1>SiteGuard AI</h1>
            <p>
              Convert existing CCTV cameras into an always-on AI supervision
              layer that detects PPE violations, intrusion, fire, unsafe
              behavior, and operational incidents in real time.
            </p>
            <div className="surveillance-actions">
              <Link className="button button-primary" href="/contact">
                Book a private demo
              </Link>
              <Link className="button button-ghost-light" href="/product">
                Explore the platform
              </Link>
            </div>
          </div>

          <div className="surveillance-command reveal rise" aria-label="AI CCTV surveillance preview">
            <div className="command-topline">
              <div>
                <span>Live CCTV wall</span>
                <strong>12 cameras monitored</strong>
              </div>
              <p>AI active</p>
            </div>
            <div className="camera-wall">
              <article className="camera-tile camera-tile-large">
                <Image
                  src="/solutions/detections/face-recognition.png"
                  alt="Live face recognition detection monitored by SiteGuard AI."
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 42vw"
                />
                <span className="feed-label">Zone A - Entry checkpoint</span>
                <span className="detection-box detection-box-helmet">Face match</span>
                <span className="detection-box detection-box-person">Identity verified</span>
              </article>
              <article className="camera-tile">
                <Image
                  src="/solutions/detections/fire-alert.png"
                  alt="Fire and flame detection evidence in SiteGuard AI."
                  fill
                  sizes="(max-width: 980px) 50vw, 18vw"
                />
                <span className="feed-label">Fire detection</span>
              </article>
              <article className="camera-tile">
                <Image
                  src="/solutions/detections/intrusion.png"
                  alt="Intrusion detection example in CCTV footage."
                  fill
                  sizes="(max-width: 980px) 50vw, 18vw"
                />
                <span className="feed-label">Restricted zone</span>
              </article>
            </div>
            <div className="alert-console">
              <div>
                <span>Latest detection</span>
                <strong>Fire alert with evidence clip</strong>
              </div>
              <p>00:12 ago</p>
            </div>
          </div>

          <div className="surveillance-signal-row">
            {heroSignals.map((signal) => (
              <article key={signal.title} className="surveillance-signal-card reveal rise">
                <div className="signal-icon">
                  <IconMark name={signal.icon} />
                </div>
                <div>
                  <h2>{signal.title}</h2>
                  <p>{signal.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section metrics-band">
        <div className="section-inner">
          <div className="metric-grid">
            {homeMetrics.map((metric) => (
              <article className="metric-card reveal rise" key={metric.label}>
                <div className="card-icon">
                  <IconMark name={metric.icon} />
                </div>
                <span className="metric-value">{metric.value}</span>
                <h3>{metric.label}</h3>
                <p>{metric.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-hero">
          <div className="split-copy reveal rise">
            <SectionHeading
              eyebrow="Product proof"
              title="A premium command layer built on the cameras you already trust."
              description="Instead of adding new surveillance hardware, SiteGuard sits on top of your existing CCTV network, analyzes every frame in real time, and escalates only what matters."
            />
            <div className="feature-bullets">
              {operationalPillars.map((item) => (
                <article key={item.title}>
                  <div className="feature-row">
                    <div className="card-icon">
                      <IconMark name={item.icon} />
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="showcase-stack">
            <div className="home-showcase-carousel home-showcase-carousel-clean">
              <ImageCarousel slides={workflowCarouselSlides} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="section-inner">
          <SectionHeading
            eyebrow="How it works"
            title="A measured four-step architecture with no disruption to daily operations."
            description="The platform is designed to fit into existing environments quickly: ingest, analyze, alert, and review."
          />
          <div className="timeline-grid timeline-grid-architecture">
            {architectureSteps.map((step) => (
              <article className="timeline-card reveal rise" key={step.step}>
                <span className="timeline-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Industry fit"
            title="One platform, tuned to very different operational realities."
            description="SiteGuard adapts its AI detections and reporting to the risks that matter in each environment, from PPE enforcement to altercation detection."
          />
          <div className="industry-grid">
              {industryHighlights.map((industry) => (
                <article className="industry-card reveal rise" key={industry.name}>
                  <div className="industry-card-top">
                    <div className="card-icon">
                      <IconMark name={industry.icon} />
                    </div>
                    <span>{industry.tag}</span>
                    <h3>{industry.name}</h3>
                  </div>
                <p>{industry.summary}</p>
                <ul>
                  {industry.focusAreas.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="section-inner cta-panel reveal rise">
          <div className="cta-copy">
            <span className="eyebrow">Ready to stop watching?</span>
            <h2>Start detecting with a calmer, more accountable operation.</h2>
            <p>
              Move from passive monitoring to immediate, evidence-backed
              supervision across every critical zone.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button button-primary" href="/contact">
              Request a consultation
            </Link>
            <Link className="button button-secondary" href="/solutions">
              View all capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
