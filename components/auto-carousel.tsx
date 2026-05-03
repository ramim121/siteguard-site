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

  const active = slides[index];

  return (
    <div className="auto-carousel">
      <div className="auto-carousel-frame">
        <div className="screenshot-topbar">
          <span />
          <span />
          <span />
          <p>{active.label}</p>
        </div>
        <div className="auto-carousel-media">
          <Image
            src={active.src}
            alt={active.alt}
            fill
            style={{
              objectFit: "cover",
              objectPosition: active.objectPosition ?? "center",
            }}
          />
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
