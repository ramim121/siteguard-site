import { AutoCarousel } from "@/components/auto-carousel";
import { PageHero } from "@/components/page-hero";
import { HeroVisual } from "@/components/hero-visual";
import { IconMark } from "@/components/icon-mark";
import { ScreenshotFrame } from "@/components/screenshot-frame";
import { SectionHeading } from "@/components/section-heading";
import {
  architectureSteps,
  platformMoments,
  workflowCarouselSlides,
  screenshotGallery,
  platformStats,
} from "@/lib/content";

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="A composed platform for live supervision, evidence, and response."
        description="Every detection moves through a single product experience: live video, real-time alerts, evidence clips, trend reporting, and management visibility."
        primaryCta={{ href: "/contact", label: "See the platform live" }}
        secondaryCta={{ href: "/solutions", label: "Review capabilities" }}
        compact
        visual={
          <HeroVisual
            src="/hero/platform-hero.png"
            alt="Generated SiteGuard platform hero showing live camera monitoring, recent alerts, and operational command panels."
            label="Platform overview"
            accent="orb-amber"
            chips={["Live view", "Instant alerts", "Reports & analytics"]}
          />
        }
      />

      <section className="section">
        <div className="section-inner">
          <div className="workflow-layout">
            <div className="workflow-copy reveal rise">
              <SectionHeading
                eyebrow="Workflow"
                title="Built for decisive action, not passive monitoring."
                description="Each part of the interface is designed to shorten the path from detection to response."
              />
              <div className="moment-grid moment-grid-compact">
                {platformMoments.map((moment) => (
                  <article className="moment-card reveal rise" key={moment.title}>
                    <div className="card-icon">
                      <IconMark name={moment.icon} />
                    </div>
                    <span>{moment.eyebrow}</span>
                    <h3>{moment.title}</h3>
                    <p>{moment.description}</p>
                  </article>
                ))}
              </div>
              <div className="platform-stat-row platform-stat-row-compact">
                {platformStats.map((stat) => (
                  <article className="platform-stat-card reveal rise" key={stat.label}>
                    <span>{stat.label}</span>
                    <h3>{stat.value}</h3>
                  </article>
                ))}
              </div>
            </div>
            <div className="workflow-media reveal rise">
              <AutoCarousel slides={workflowCarouselSlides} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="section-inner media-layout">
          <div className="media-column reveal rise">
            <ScreenshotFrame
              src={screenshotGallery.live.src}
              alt={screenshotGallery.live.alt}
              label="Live operations"
            />
          </div>
          <div className="media-copy reveal rise">
            <SectionHeading
              eyebrow="Live feed"
              title="Monitor multiple zones without losing the human sense of the site."
              description="SiteGuard presents live camera surfaces, active incidents, and zone context in a way that remains readable under pressure."
            />
            <p>
              Operators can move from a high-level view into the exact location,
              camera, and moment that triggered the event without wading through
              raw footage manually.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner media-layout reverse">
          <div className="media-copy reveal rise">
            <SectionHeading
              eyebrow="Alerts"
              title="Escalation designed around trust, evidence, and timing."
              description="Severity, event type, camera source, and timestamped evidence are visible immediately so teams can prioritize the right response."
            />
            <p>
              Alerts can power notifications across supervisors, security teams,
              and operations leaders while preserving a full audit trail.
            </p>
          </div>
          <div className="media-column reveal rise">
            <ScreenshotFrame
              src={screenshotGallery.alerts.src}
              alt={screenshotGallery.alerts.alt}
              label="Alert history"
              cropped
              objectPosition="left top"
            />
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="section-inner media-layout">
          <div className="media-column reveal rise">
            <ScreenshotFrame
              src={screenshotGallery.reports.src}
              alt={screenshotGallery.reports.alt}
              label="Reports and analytics"
            />
          </div>
          <div className="media-copy reveal rise">
            <SectionHeading
              eyebrow="Analytics"
              title="Move from incidents to patterns with reporting that management can actually use."
              description="Track repeated violations, zone risk, peak event windows, and compliance performance across teams and sites."
            />
            <p>
              This gives leadership a clean path from daily monitoring to
              strategic improvement, insurance conversations, and audit
              readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Architecture"
            title="Quietly layered across edge analysis, instant alerts, and centralized review."
            description="The underlying product flow remains simple, even when the AI workload is sophisticated."
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
    </>
  );
}
