import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { HeroVisual } from "@/components/hero-visual";
import { IconMark } from "@/components/icon-mark";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with SiteGuard AI."
        description="Share your site type and priorities."
        primaryCta={{
          href: "mailto:ashraf.siddiquee@maxgroup-bd.com?subject=SiteGuard%20AI%20demo%20request",
          label: "Email SiteGuard AI",
        }}
        secondaryCta={{ href: "/solutions", label: "Review capabilities" }}
        compact
        visual={
          <HeroVisual
            src="/hero/contact-hero.png"
            alt="Generated SiteGuard contact hero showing direct contact details and deployment inquiry interface."
            label="Direct contact"
            accent="orb-teal"
            chips={["ashraf.siddiquee@maxgroup-bd.com", "01730589252", "site-guard.ai"]}
          />
        }
      />

      <section className="section">
        <div className="section-inner contact-layout">
          <div className="contact-copy reveal rise">
            <SectionHeading
              eyebrow="Let's talk"
              title="Contact details"
              description="Fast handoff for demos and deployment discussions."
            />
            <div className="contact-points contact-points-compact">
              {contactDetails.map((detail) => (
                <article className="contact-point-card contact-point-card-compact" key={detail.label}>
                  <div className="card-icon">
                    <IconMark name={detail.icon} />
                  </div>
                  <div>
                    <h3>{detail.label}</h3>
                    <p>{detail.value}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="contact-form-shell reveal rise">
            <form className="contact-form">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Company
                <input type="text" placeholder="Organization name" />
              </label>
              <label>
                Work email
                <input type="email" placeholder="name@company.com" />
              </label>
              <label>
                Primary industry
                <select defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Construction</option>
                  <option>Manufacturing</option>
                  <option>Banking</option>
                  <option>Enterprise facilities</option>
                </select>
              </label>
              <label>
                What do you want to monitor?
                <textarea
                  rows={4}
                  placeholder="PPE, intrusion, fire, reporting, or multi-site visibility."
                />
              </label>
              <Link
                className="button button-primary"
                href="mailto:ashraf.siddiquee@maxgroup-bd.com?subject=SiteGuard%20AI%20demo%20request"
              >
                Open email draft
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
