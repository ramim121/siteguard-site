import { PageHero } from "@/components/page-hero";
import { HeroVisual } from "@/components/hero-visual";
import { IconMark } from "@/components/icon-mark";
import { SectionHeading } from "@/components/section-heading";
import { industryDetails } from "@/lib/content";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Different industries, unified through elegant operational intelligence."
        description="SiteGuard supports high-risk, high-throughput environments where manual supervision consistently falls short."
        primaryCta={{ href: "/contact", label: "Plan your rollout" }}
        secondaryCta={{ href: "/product", label: "See the platform" }}
        compact
        visual={
          <HeroVisual
            src="/hero/industries-hero.svg"
            alt="Industry illustration representing construction, manufacturing, and banking environments."
            label="Industry-ready deployment"
            accent="orb-amber"
            chips={["Construction", "Manufacturing", "Banking"]}
          />
        }
      />

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Deployment fit"
            title="Designed for the operational language of each environment."
            description="Each sector brings a different supervision burden, compliance posture, and response model."
          />
          <div className="industry-overview-grid">
            {industryDetails.map((industry) => (
              <article className="industry-overview-card reveal rise" key={industry.name}>
                <div className="industry-overview-head">
                  <div className="card-icon card-icon-small-accent">
                    <IconMark name={industry.icon} />
                  </div>
                  <div>
                    <span>{industry.tag}</span>
                    <h3>{industry.name}</h3>
                  </div>
                </div>
                <p>{industry.summary}</p>
                <ul>
                  {industry.focusAreas.slice(0, 3).map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="section-inner">
          <div className="industry-detail-grid industry-detail-grid-redesigned">
            {industryDetails.map((industry) => (
              <article className="industry-detail-card reveal rise" key={`${industry.name}-detail`}>
                <div className="industry-detail-head industry-detail-head-redesigned">
                  <div className="industry-heading-row">
                    <div className="card-icon card-icon-title">
                      <IconMark name={industry.icon} />
                    </div>
                    <div>
                      <span>{industry.tag}</span>
                      <h3>{industry.name}</h3>
                    </div>
                  </div>
                  <p>{industry.summary}</p>
                </div>
                <div className="industry-columns">
                  <div>
                    <h4>Core site challenges</h4>
                    <ul>
                      {industry.challenges.map((challenge) => (
                        <li key={challenge}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Best-fit detections</h4>
                    <ul>
                      {industry.focusAreas.map((focus) => (
                        <li key={focus}>{focus}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
