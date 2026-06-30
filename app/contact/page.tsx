import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { IconMark } from "@/components/icon-mark";
import { ContactForm } from "@/components/contact-form";
import { contactDetails } from "@/lib/content";

const mailto =
  "mailto:info@site-guard.ai?subject=SiteGuard%20AI%20demo%20request";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's turn your cameras into a{" "}
            <span className="accent">safety system.</span>
          </>
        }
        description="Share your site type and priorities and we'll line up a live demo with a scenario pack tuned to your environment."
        primaryCta={{ href: mailto, label: "Email SiteGuard" }}
        secondaryCta={{ href: "/solutions", label: "Review capabilities" }}
      />

      <section className="section">
        <div className="section-inner contact-layout">
          <div className="reveal">
            <SectionHeading
              eyebrow="Direct line"
              title="Talk to the team."
              description="Fast handoff for demos and deployment discussions."
            />
            <div className="contact-points">
              {contactDetails.map((detail) => (
                <article className="contact-point" key={detail.label}>
                  <span className="icon-tile icon-tile-sm">
                    <IconMark name={detail.icon} />
                  </span>
                  <div>
                    <h3>{detail.label}</h3>
                    <p>{detail.value}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
