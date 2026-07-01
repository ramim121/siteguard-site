import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { IconMark } from "@/components/icon-mark";
import { ContactForm } from "@/components/contact-form";
import { contactDetails, footerInfo } from "@/lib/content";

const OFFICE = { lat: 23.78194652807563, lng: 90.39394881797723 };
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${OFFICE.lat},${OFFICE.lng}`;
const mapsEmbed = `https://maps.google.com/maps?q=${OFFICE.lat},${OFFICE.lng}&z=16&hl=en&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's put SiteGuard on your <span className="accent">cameras.</span>
          </>
        }
        description="Tell us your site type and priorities and we'll arrange a live demo with a scenario pack tuned to your environment."
        primaryCta={{ href: "#enquiry", label: "Start an enquiry" }}
        secondaryCta={{ href: "/solutions", label: "Review capabilities" }}
      />

      <section className="section" id="enquiry">
        <div className="section-inner contact-layout">
          <div className="reveal">
            <SectionHeading
              eyebrow="Direct line"
              title="Talk to the team."
              description="A short brief is enough to scope a demo and the right pack for your site."
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

      {/* ---------------------------------------------------- Office / map */}
      <section className="section section-compact">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Visit us"
            title="Our office."
            description="SiteGuard is developed and supported by NYK Advance Ltd. in Dhaka."
          />
          <figure className="map-card reveal">
            <figcaption className="map-head">
              <span className="map-pin">
                <IconMark name="mapPin" />
              </span>
              <div className="map-meta">
                <strong>NYK Advance Ltd.</strong>
                <span>{footerInfo.address}</span>
              </div>
              <a
                className="button button-secondary"
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </figcaption>
            <div className="map-frame">
              <iframe
                title="NYK Advance Ltd. office location"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
