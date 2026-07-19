"use client";

import { useEffect, useState } from "react";
import { DetectionFrame } from "@/components/detection-frame";
import { heroFrames, sectionFrames } from "@/lib/content";

const slides = [...heroFrames, ...sectionFrames.slice(0, 2)];
const HOLD_MS = 4200;

/**
 * Animated hero device: cycles detection frames with a smooth crossfade,
 * a scanning sweep and a gentle float — surveillance-relevant motion only.
 * Movement is disabled under prefers-reduced-motion (crossfade remains).
 */
export function HeroShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, HOLD_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-stage" aria-label="Live detection examples">
      <div className="hero-frames">
        {slides.map((frame, i) => (
          <div className={i === index ? "hero-slide active" : "hero-slide"} key={frame.model}>
            <DetectionFrame frame={frame} priority={i === 0} />
          </div>
        ))}
        <span className="hero-scanline" aria-hidden />
      </div>
      <div className="hero-stage-dots" aria-hidden>
        {slides.map((frame, i) => (
          <button
            type="button"
            key={frame.model}
            className={i === index ? "dot on" : "dot"}
            tabIndex={-1}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
