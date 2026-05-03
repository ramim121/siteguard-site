import Link from "next/link";
import {
  architectureSteps,
  homeMetrics,
  industryHighlights,
  operationalPillars,
  workflowCarouselSlides,
} from "@/lib/content";
import { AutoCarousel } from "@/components/auto-carousel";
import { IconMark } from "@/components/icon-mark";
import { PageHero } from "@/components/page-hero";
import { HeroVisual } from "@/components/hero-visual";
import { SectionHeading } from "@/components/section-heading";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="AI-powered visual intelligence"
        title="Elegant operational awareness for modern sites."
        description="SiteGuard AI transforms existing CCTV into a live layer of operational awareness for safety, compliance, and response across construction, manufacturing, banking, and multi-site operations."
        primaryCta={{ href: "/contact", label: "Book a private demo" }}
        secondaryCta={{ href: "/product", label: "Explore the platform" }}
        panelPoints={[
          "Existing CCTV. No new camera estate required.",
          "15+ AI models for safety, security, and behavior.",
          "Evidence-backed alerts with management-ready reporting.",
        ]}
        visual={
          <HeroVisual
            src="/hero/home-hero.svg"
            alt="Abstract SiteGuard hero illustration showing dashboard surfaces, analytics, and real-time monitoring."
            label="SiteGuard command layer"
            accent="orb-teal"
            chips={["Existing CCTV", "Real-time alerts", "Cross-industry deployment"]}
          />
        }
      />

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
          <div className="showcase-stack reveal float">
            <div className="home-showcase-carousel">
              <AutoCarousel slides={workflowCarouselSlides} />
            </div>
            <div className="showcase-note">
              <span>Always-on overview</span>
              <p>
                Live camera health, alert severity, and operational activity in
                one elegant command surface.
              </p>
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
