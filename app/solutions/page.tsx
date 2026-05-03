import { PageHero } from "@/components/page-hero";
import { HeroVisual } from "@/components/hero-visual";
import { IconMark } from "@/components/icon-mark";
import { SectionHeading } from "@/components/section-heading";
import {
  algorithmDetections,
  solutionArchitecture,
  solutionCategories,
  solutionStats,
  solutionTechnicalAspects,
} from "@/lib/content";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="A refined library of visual detection systems."
        description="SiteGuard groups its AI models into practical supervision categories so teams can deploy what matters without complexity."
        primaryCta={{ href: "/contact", label: "Discuss your use case" }}
        secondaryCta={{ href: "/industries", label: "Compare industries" }}
        compact
        visual={
          <HeroVisual
            src="/hero/solutions-hero.png"
            alt="Generated SiteGuard solutions hero showing connected AI detection systems for safety, security, behavior, people, and vehicles."
            label="Various detection systems"
            accent="orb-teal"
            chips={["PPE", "Intrusion", "Behavior", "People flow", "Parking"]}
          />
        }
      />

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Detection stack"
            title="Various detection systems"
            description="The platform monitors more than 15 event types while keeping the operational story easy to understand."
          />
          <div className="solution-stat-grid">
            {solutionStats.map((stat) => (
              <article className="solution-stat-card reveal rise" key={stat.label}>
                <span>{stat.value}</span>
                <h3>{stat.label}</h3>
                <p>{stat.description}</p>
              </article>
            ))}
          </div>
          <div className="solution-intro-grid">
            {solutionCategories.map((category) => (
              <article className="solution-pill-card reveal rise" key={category.name}>
                <div className="card-icon">
                  <IconMark name={category.icon} />
                </div>
                <div>
                  <span>{category.eyebrow}</span>
                  <h3>{category.name}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="solution-grid solution-grid-modern">
            {solutionCategories.map((category) => (
              <article className="solution-card reveal rise" key={category.name}>
                <div className="solution-card-media">
                  <Image
                    src={category.image}
                    alt={`${category.eyebrow} visual`}
                    width={620}
                    height={340}
                  />
                </div>
                <div className="solution-card-top">
                  <div className="card-icon card-icon-small-accent">
                    <IconMark name={category.icon} />
                  </div>
                  <div>
                    <span>{category.eyebrow}</span>
                    <h3>{category.name}</h3>
                  </div>
                </div>
                <p>{category.description}</p>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Algorithm proof"
            title="Selected detection algorithms"
            description="A compact view of the detection systems SiteGuard can activate across safety, security, behavior, identity, and occupancy monitoring."
          />
          <div className="algorithm-grid">
            {algorithmDetections.map((detection) => (
              <article className="algorithm-card reveal rise" key={detection.title}>
                <div className="algorithm-media">
                  <Image
                    src={detection.image}
                    alt={`${detection.title} detection visual`}
                    fill
                    sizes="(max-width: 720px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: detection.objectPosition ?? "center",
                    }}
                  />
                </div>
                <div className="algorithm-card-body">
                  <span>{detection.tag}</span>
                  <h3>{detection.title}</h3>
                  <p>{detection.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="section-inner solution-architecture-layout">
          <div className="solution-architecture-copy reveal rise">
            <SectionHeading
              eyebrow="Solution overview"
              title="A technical architecture built for existing camera infrastructure."
              description="The platform can be deployed without replacing the current video estate by combining camera ingest, switch pooling, edge AI compute, and multi-surface platform access."
            />
            <ul className="technical-list">
              {solutionTechnicalAspects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="solution-architecture-visual reveal rise">
            <Image
              src="/solution-overview/diagram.jpg"
              alt="SiteGuard solution overview architecture diagram."
              width={1267}
              height={689}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="timeline-grid timeline-grid-architecture">
            {solutionArchitecture.map((step, index) => (
              <article className="timeline-card reveal rise" key={step.title}>
                <span className="timeline-step">0{index + 1}</span>
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
