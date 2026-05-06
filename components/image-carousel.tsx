"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  label: string;
  description?: string;
  objectPosition?: string;
};

type ImageCarouselProps = {
  slides: Slide[];
  variant?: "surface" | "phone";
  intervalMs?: number;
};

export function ImageCarousel({
  slides,
  variant = "surface",
  intervalMs = 5000,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, slides.length]);

  const current = slides[index];
  const rootClass =
    variant === "phone"
      ? "image-carousel image-carousel-phone"
      : "image-carousel image-carousel-surface";

  return (
    <div className={rootClass}>
      <div className="image-carousel-stage">
        <div
          className="image-carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="image-carousel-slide" key={slide.label}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes={variant === "phone" ? "(max-width: 1200px) 68vw, 25vw" : "(max-width: 1200px) 100vw, 42vw"}
                style={{
                  objectFit: variant === "phone" ? "contain" : "cover",
                  objectPosition: slide.objectPosition ?? "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="image-carousel-meta">
        <div>
          <h3>{current.label}</h3>
          {current.description ? <p>{current.description}</p> : null}
        </div>
        <div className="image-carousel-dots" aria-label="Carousel navigation">
          {slides.map((slide, slideIndex) => (
            <button
              type="button"
              key={slide.label}
              className={
                slideIndex === index
                  ? "carousel-dot carousel-dot-active"
                  : "carousel-dot"
              }
              onClick={() => setIndex(slideIndex)}
              aria-label={`Show ${slide.label}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
