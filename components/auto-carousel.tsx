"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  label: string;
  cropped?: boolean;
  objectPosition?: string;
};

type AutoCarouselProps = {
  slides: Slide[];
};

export function AutoCarousel({ slides }: AutoCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="auto-carousel">
      <div className="auto-carousel-frame">
        <div className="screenshot-topbar">
          <span />
          <span />
          <span />
          <p>{slides[index]?.label}</p>
        </div>
        <div className="auto-carousel-media">
          <div
            className="auto-carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide) => (
              <div className="auto-carousel-slide" key={slide.label}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 50vw"
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
      <div className="auto-carousel-dots" aria-label="Carousel navigation">
        {slides.map((slide, slideIndex) => (
          <button
            type="button"
            key={slide.label}
            className={slideIndex === index ? "carousel-dot carousel-dot-active" : "carousel-dot"}
            onClick={() => setIndex(slideIndex)}
            aria-label={`Show ${slide.label}`}
          />
        ))}
      </div>
    </div>
  );
}
