import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { DetectionFrame } from "@/components/detection-frame";
import { MobileMock } from "@/components/mobile-mock";
import { ExperienceCenter } from "@/components/experience-center";
import {
  CommandMock,
  LiveWallMock,
  AlertDetailMock,
  AnalyticsMock,
  FaceMatchMock,
} from "@/components/platform-mocks";
import { SectionHeading } from "@/components/section-heading";
import { IconMark } from "@/components/icon-mark";
import { platformMoments, platformStats, sectionFrames, systemArchitecture } from "@/lib/content";

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            One command surface for <span className="accent">live supervision</span>,
            evidence and response.
          </>
        }
        description="Every detection moves through a single product experience: a live camera wall, real-time alerts with evidence, face recognition, exportable analytics, and a mobile app that pushes the moment something matters."
        primaryCta={{ href: "/contact", label: "See the platform live" }}
        secondaryCta={{ href: "/solutions", label: "Review capabilities" }}
        visual={<DetectionFrame frame={sectionFrames[0]} priority />}
      />

      {/* ---------------------------------------------------- Workflow */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Workflow"
            title="Built for decisive action, not passive monitoring."
            description="Each part of the interface is designed to shorten the path from detection to response."
          />
          <div className="pillar-grid">
            {platformMoments.map((moment) => (
              <article className="feature-card reveal" key={moment.title}>
                <span className="icon-tile">
                  <IconMark name={moment.icon} />
                </span>
                <span className="eyebrow no-rule">{moment.eyebrow}</span>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </article>
            ))}
          </div>
          <div className="stat-strip" style={{ marginTop: 28 }}>
            {platformStats.map((stat) => (
              <article className="stat-tile reveal" key={stat.lbl}>
                <div className="num">{stat.num}</div>
                <div className="lbl">{stat.lbl}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------- Experience center */}
      <section className="section section-tinted">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Experience center · interactive"
            title="Explore the detections, live."
            description="Pick a category, choose a detection, and see a real example from the SiteGuard system. 30+ models across six families, all on the cameras you already have."
          />
          <ExperienceCenter />
        </div>
      </section>

      {/* ------------------------------------------------ Live wall */}
      <section className="section">
        <div className="section-inner split">
          <div className="reveal">
            <SectionHeading
              eyebrow="Live monitoring"
              title="A clean multi-camera live wall."
              description="Monitor several critical zones at once without losing legibility, with AI labels and category-coloured detection frames on every feed."
            />
            <ul className="check-list">
              <li>Configurable 1×1 up to multi-zone grids</li>
              <li>Full-screen and per-camera focus</li>
              <li>Live labels for identity, fire, PPE and intrusion</li>
            </ul>
          </div>
          <LiveWallMock />
        </div>
      </section>

      {/* ------------------------------------------------ Command surface */}
      <section className="section section-tinted">
        <div className="section-inner split reverse">
          <CommandMock />
          <div className="reveal">
            <SectionHeading
              eyebrow="Command dashboard"
              title="Is the system healthy, what just happened, what needs me now."
              description="Big Archivo numbers, mono labels, and the same severity colours everywhere — answered in seconds, with the most severe data reading first."
            />
            <ul className="check-list">
              <li>Live camera-health and severity counts</li>
              <li>24-hour alert trend at a glance</li>
              <li>Recent alerts with evidence thumbnails</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Alert detail */}
      <section className="section">
        <div className="section-inner split">
          <div className="reveal">
            <SectionHeading
              eyebrow="Alert intelligence"
              title="Every incident arrives with the evidence."
              description="Opening an alert puts the detection frame first — a bounding box tagged with object class, ID and confidence — paired with everything needed to act."
            />
            <ul className="check-list">
              <li>Model, camera, zone, location, confidence and timestamp</li>
              <li>Acknowledge or escalate with one primary action</li>
              <li>Full audit trail: pending → acknowledged → resolved</li>
            </ul>
          </div>
          <AlertDetailMock />
        </div>
      </section>

      {/* ------------------------------------------------ Analytics */}
      <section className="section section-tinted">
        <div className="section-inner split reverse">
          <AnalyticsMock />
          <div className="reveal">
            <SectionHeading
              eyebrow="Reports & analytics"
              title="From incidents to patterns leadership can use."
              description="Alert distribution by family, per-camera severity, and trends across any date range — turning daily monitoring into strategic improvement and audit readiness."
            />
            <ul className="check-list">
              <li>Distribution by detection family</li>
              <li>Per-camera severity stacks</li>
              <li>Exportable, time-stamped evidence records</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Face recognition */}
      <section className="section">
        <div className="section-inner split">
          <div className="reveal">
            <SectionHeading
              eyebrow="Face recognition"
              title="Know who is on site, automatically."
              description="Match faces against enrolled staff, visitor and watchlist records at entry points — with consent-based, configurable enrolment."
            />
            <ul className="check-list">
              <li>Silent watchlist flags at the gate</li>
              <li>Automated staff and visitor access logs</li>
              <li>Attributes and match confidence on every event</li>
            </ul>
          </div>
          <FaceMatchMock />
        </div>
      </section>

      {/* ------------------------------------------------ Mobile + push */}
      <section className="section section-tinted">
        <div className="section-inner mobile-layout">
          <div className="reveal">
            <SectionHeading
              eyebrow="Mobile app · push alerts"
              title="The right person, notified in seconds."
              description="Take live supervision into the field. The instant a critical detection fires, SiteGuard pushes a notification — with the camera, model and confidence — straight to the right phone."
            />
            <ul className="check-list">
              <li>Instant push, SMS or email on every critical event</li>
              <li>Sound and vibrate reserved for critical only — never noise</li>
              <li>Tap a notification to jump straight to the live feed</li>
            </ul>
          </div>
          <div className="reveal">
            <MobileMock />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Architecture */}
      <section className="section section-ink">
        <div className="section-inner">
          <SectionHeading
            eyebrow="System architecture"
            title="From camera to alert, end to end."
            description="Four stages turn the feeds from the cameras you already have into real-time alerts on any device."
          />
          <div className="timeline-grid">
            {systemArchitecture.map((step) => (
              <article className="timeline-card reveal" key={step.step}>
                <span className="timeline-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="section section-compact">
        <div className="section-inner">
          <div className="cta-panel reveal">
            <div>
              <span className="eyebrow">See it on your feed</span>
              <h2 style={{ marginTop: 14 }}>Watch the platform run on a live camera.</h2>
              <p>Book a walkthrough and we will tune a scenario pack to your site.</p>
            </div>
            <div className="cta-actions">
              <Link className="button button-primary button-lg" href="/contact">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
