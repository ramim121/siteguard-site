import Image from "next/image";
import type { FrameData } from "@/lib/content";

type DetectionFrameProps = {
  frame: FrameData;
  priority?: boolean;
  className?: string;
};

/**
 * The signature SiteGuard "detection frame" device:
 * a dark CCTV card with a faint grid, LIVE pill, camera/zone/timestamp,
 * category-colored corner brackets, a subject glyph and a result tag.
 * Used across the site instead of stock photography.
 */
export function DetectionFrame({ frame, priority = false, className }: DetectionFrameProps) {
  return (
    <div className={`detection-frame cat-${frame.category} ${className ?? ""}`.trim()}>
      <div className="df-glyph">
        <Image
          src={frame.glyph}
          alt=""
          width={220}
          height={220}
          priority={priority}
          aria-hidden
        />
      </div>

      <div className="df-top">
        <span className="df-live">
          <span className="dot" />
          LIVE
        </span>
        <span className="df-cam">
          {frame.cam}
          <span>{frame.timestamp}</span>
        </span>
      </div>

      <div className="df-box">
        <i />
        <i />
        <i />
        <i />
        <span className="tag">{frame.objectTag}</span>
      </div>

      <div className="df-bottom">
        <span className="df-result">
          <span className="chip">{frame.label}</span>
          <span className="model">{frame.model}</span>
        </span>
        <span className="df-conf">
          {frame.confidence}
          {frame.confidence !== "—" ? <span>%</span> : null}
        </span>
      </div>
    </div>
  );
}
