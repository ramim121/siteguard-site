"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { IconMark } from "@/components/icon-mark";
import {
  experienceCategories,
  experienceDetections,
  type ExperienceDetection,
} from "@/lib/content";

const sevLabel: Record<string, string> = {
  critical: "Critical",
  warning: "Warning",
  info: "Info",
  access: "Access",
};

export function ExperienceCenter() {
  const [categoryId, setCategoryId] = useState(experienceCategories[0].id);

  const detections = useMemo(
    () => experienceDetections.filter((d) => d.categoryId === categoryId),
    [categoryId],
  );

  const [activeId, setActiveId] = useState<string>(
    experienceDetections.find((d) => d.categoryId === experienceCategories[0].id)?.id ?? "",
  );

  function selectCategory(id: string) {
    setCategoryId(id);
    const first = experienceDetections.find((d) => d.categoryId === id);
    if (first) setActiveId(first.id);
  }

  const active: ExperienceDetection =
    experienceDetections.find((d) => d.id === activeId) ?? detections[0];

  return (
    <div className="xc">
      {/* categories */}
      <div className="xc-rail" role="group" aria-label="Detection categories">
        {experienceCategories.map((cat) => {
          const count = experienceDetections.filter((d) => d.categoryId === cat.id).length;
          const isActive = cat.id === categoryId;
          return (
            <button
              type="button"
              key={cat.id}
              aria-pressed={isActive}
              className={isActive ? "xc-cat xc-cat-active" : "xc-cat"}
              onClick={() => selectCategory(cat.id)}
            >
              <IconMark name={cat.icon} />
              {cat.name}
              <span className="cnt">{count}</span>
            </button>
          );
        })}
      </div>

      {/* algorithms in active category */}
      <div className="xc-list" aria-label="Detections">
        {detections.map((d) => {
          const isActive = d.id === active?.id;
          return (
            <button
              type="button"
              key={d.id}
              className={isActive ? "xc-algo xc-algo-active" : "xc-algo"}
              onClick={() => setActiveId(d.id)}
            >
              <span className={`xc-sev sev-${d.severity}`} />
              {d.name}
              {!d.image ? <span className="xc-soon">sample</span> : null}
            </button>
          );
        })}
      </div>

      {/* viewer */}
      <div className="xc-viewer">
        <div className={`xc-screen cat-${active?.severity ?? "access"}`}>
          <div className="xc-top">
            <span className="xc-live">
              <span className="dot" />
              LIVE
            </span>
            <span className="xc-cam">SiteGuard · AI</span>
          </div>

          {active?.image ? (
            <Image
              key={active.id}
              src={active.image}
              alt={`${active.name} detection from the SiteGuard system`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="xc-photo"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="xc-empty">
              {active ? (
                <Image src={active.glyph} alt="" width={64} height={64} aria-hidden />
              ) : null}
              <span>Representative scene</span>
            </div>
          )}

          {active ? <span className="xc-tagchip">{active.name}</span> : null}
        </div>

        <div className="xc-caption">
          <h4>{active?.name}</h4>
          <p>{active?.description}</p>
          <div className="xc-meta">
            <span className={`severity-pill s-${active?.severity}`}>
              <span className={`sev-dot sev-${active?.severity}`} />
              {sevLabel[active?.severity ?? "access"]}
            </span>
            {active && !active.image ? (
              <span className="xc-soon">Sample imagery</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
