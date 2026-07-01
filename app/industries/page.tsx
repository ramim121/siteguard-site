import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { DetectionFrame } from "@/components/detection-frame";
import { SectionHeading } from "@/components/section-heading";
import { IndustryShowcase } from "@/components/industry-showcase";
import { sectionFrames } from "@/lib/content";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Different industries, unified by one{" "}
            <span className="accent">safety layer.</span>
          </>
        }
        description="SiteGuard is industry-agnostic — any site with cameras and a duty of care. The same platform fits every lead vertical through pre-tuned scenario packs."
        primaryCta={{ href: "/industries/schools", label: "Explore Schools" }}
        secondaryCta={{ href: "/contact", label: "Plan your rollout" }}
        visual={<DetectionFrame frame={sectionFrames[3]} priority />}
      />

      {/* ---------------------------------------------------- Grid */}
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Lead verticals"
            title="One platform, tuned for every environment."
            description="Select a vertical to see how the same detection library is packaged into a curated scenario pack — models, thresholds and zones tuned for that setting."
          />
          <IndustryShowcase />
        </div>
      </section>

      {/* ---------------------------------------------------- Schools spotlight */}
      <section className="section section-ink">
        <div className="section-inner split">
          <div className="reveal">
            <span className="eyebrow">Live now · Schools</span>
            <h2 style={{ marginBlock: "16px 16px", fontSize: "clamp(28px,3.6vw,40px)" }}>
              AI-powered campus safety, built from a real deployment.
            </h2>
            <p style={{ color: "var(--sg-ink-text-soft)", fontSize: 17, lineHeight: 1.6 }}>
              Eleven live detection models on the cameras a school already has —
              from weapon and fire detection to vaping, wandering and access —
              with eight more in active development.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary button-lg" href="/industries/schools">
                Explore the Schools solution
              </Link>
            </div>
          </div>
          <DetectionFrame
            frame={{
              category: "behaviour",
              cam: "CAM 18 · EXAM HALL",
              zone: "ZONE A",
              timestamp: "29 JUN 2026 · 10:22:08",
              objectTag: "OBJ · PHONE",
              model: "PlayMobilePhoneDetection",
              label: "Phone in use",
              confidence: "95",
              glyph: "/brand/using_phone.png",
            }}
          />
        </div>
      </section>

      {/* ---------------------------------------------------- CTA */}
      <section className="section section-compact">
        <div className="section-inner">
          <div className="cta-panel reveal">
            <div>
              <span className="eyebrow">Your sector next</span>
              <h2 style={{ marginTop: 14 }}>Don't see your environment yet?</h2>
              <p>
                Every vertical starts from the same 90+ model library. Tell us
                your site and we'll assemble the right pack.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button button-primary button-lg" href="/contact">
                Talk to us
              </Link>
              <Link className="button button-secondary-ink button-lg" href="/solutions">
                View detection library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
