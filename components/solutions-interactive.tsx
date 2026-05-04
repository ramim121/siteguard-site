"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { IconMark } from "@/components/icon-mark";
import { SectionHeading } from "@/components/section-heading";
import { solutionCategoryTabs, solutionExperienceDetections } from "@/lib/content";

type Category = (typeof solutionCategoryTabs)[number];
type Detection = (typeof solutionExperienceDetections)[number];

export function SolutionsInteractive() {
  const [activeCategoryId, setActiveCategoryId] = useState(solutionCategoryTabs[0]?.id);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeDetectionId, setActiveDetectionId] = useState(
    solutionExperienceDetections[0]?.id,
  );

  const activeCategory = useMemo(
    () =>
      solutionCategoryTabs.find((category) => category.id === activeCategoryId) ??
      solutionCategoryTabs[0],
    [activeCategoryId],
  );

  const experienceDetections = useMemo(
    () =>
      solutionExperienceDetections.filter(
        (detection) => detection.categoryId === activeCategory.id,
      ),
    [activeCategory.id],
  );

  const activeDetection = useMemo(
    () =>
      solutionExperienceDetections.find(
        (detection) => detection.id === activeDetectionId,
      ) ?? solutionExperienceDetections[0],
    [activeDetectionId],
  );

  useEffect(() => {
    setActiveSlideIndex(0);
    setActiveDetectionId(experienceDetections[0]?.id ?? solutionExperienceDetections[0]?.id);
  }, [activeCategory.id, experienceDetections]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlideIndex((current) => (current + 1) % activeCategory.slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeCategory.slides.length]);

  const activeSlide = activeCategory.slides[activeSlideIndex];

  return (
    <>
      <section className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Detection stack"
            title="Various detection systems"
            description="Select a category to view how SiteGuard activates related detections in a live operational flow."
          />
          <div className="solution-tab-row" role="tablist" aria-label="Solution categories">
            {solutionCategoryTabs.map((category) => {
              const active = category.id === activeCategory.id;

              return (
                <button
                  type="button"
                  key={category.id}
                  role="tab"
                  aria-selected={active}
                  className={active ? "solution-tab-card solution-tab-card-active" : "solution-tab-card"}
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  <div className="solution-tab-icon">
                    <IconMark name={category.icon} />
                  </div>
                  <div className="solution-tab-copy">
                    <span>{category.eyebrow}</span>
                    <h3>{category.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="solution-tab-stage">
            <div className="solution-tab-stage-copy">
              <span className="eyebrow">{activeCategory.eyebrow}</span>
              <h3>{activeCategory.title}</h3>
              <p>{activeCategory.description}</p>
              <ul className="solution-stage-list">
                {activeCategory.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="solution-stage-media-shell">
              <div className="solution-stage-media-frame">
                <div className="screenshot-topbar">
                  <span />
                  <span />
                  <span />
                  <p>{activeSlide.title}</p>
                </div>
                <div className="solution-stage-media">
                  <div
                    className="solution-stage-track"
                    style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
                  >
                    {activeCategory.slides.map((slide) => (
                      <div className="solution-stage-slide" key={slide.title}>
                        <Image
                          src={slide.image}
                          alt={`${slide.title} live demonstration`}
                          fill
                          sizes="(max-width: 1200px) 100vw, 42vw"
                          style={{
                            objectFit: "cover",
                            objectPosition: slide.objectPosition ?? "center",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="solution-stage-meta">
                <div>
                  <h4>{activeSlide.title}</h4>
                  <p>{activeSlide.description}</p>
                </div>
                <div className="solution-stage-dots" aria-label="Detection carousel navigation">
                  {activeCategory.slides.map((slide, index) => (
                    <button
                      type="button"
                      key={slide.title}
                      className={
                        index === activeSlideIndex
                          ? "carousel-dot carousel-dot-active"
                          : "carousel-dot"
                      }
                      onClick={() => setActiveSlideIndex(index)}
                      aria-label={`Show ${slide.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Experience"
            title="Choose a detection method"
            description="Switch between individual detection methods and see the demonstration surface update immediately."
          />
          <div className="solution-experience-grid">
            <div className="solution-experience-controls">
              {experienceDetections.map((detection) => {
                const active = detection.id === activeDetection.id;

                return (
                  <button
                    type="button"
                    key={detection.id}
                    className={
                      active
                        ? "solution-experience-option solution-experience-option-active"
                        : "solution-experience-option"
                    }
                    onClick={() => setActiveDetectionId(detection.id)}
                  >
                    <span>{detection.tag}</span>
                    <h3>{detection.title}</h3>
                    <p>{detection.description}</p>
                  </button>
                );
              })}
            </div>

            <div className="solution-experience-viewer">
              <div className="solution-experience-frame">
                <div className="screenshot-topbar">
                  <span />
                  <span />
                  <span />
                  <p>{activeDetection.title}</p>
                </div>
                <div className="solution-experience-media">
                  <Image
                    src={activeDetection.image}
                    alt={`${activeDetection.title} demonstration`}
                    fill
                    sizes="(max-width: 1200px) 100vw, 42vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: activeDetection.objectPosition ?? "center",
                    }}
                  />
                </div>
              </div>
              <div className="solution-experience-caption">
                <span>{activeDetection.tag}</span>
                <h4>{activeDetection.title}</h4>
                <p>{activeDetection.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
