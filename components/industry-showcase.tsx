"use client";

import Link from "next/link";
import { useState } from "react";
import { IconMark } from "@/components/icon-mark";
import { industries } from "@/lib/content";

export function IndustryShowcase() {
  const [active, setActive] = useState(industries[0].slug);
  const current = industries.find((i) => i.slug === active) ?? industries[0];

  return (
    <div className="showcase reveal">
      <div className="sc-tabs" role="group" aria-label="Industries">
        {industries.map((ind) => {
          const on = ind.slug === active;
          return (
            <button
              type="button"
              key={ind.slug}
              aria-pressed={on}
              className={on ? "sc-tab sc-tab-on" : "sc-tab"}
              onClick={() => setActive(ind.slug)}
            >
              <span className="sc-tab-icon">
                <IconMark name={ind.icon} />
              </span>
              <span className="sc-tab-name">{ind.name}</span>
              <span className={ind.status === "live" ? "sc-dot live" : "sc-dot soon"} />
            </button>
          );
        })}
      </div>

      <div className="sc-panel">
        <div className="sc-panel-head">
          <span className="sc-panel-icon">
            <IconMark name={current.icon} />
          </span>
          <div>
            <span
              className={current.status === "live" ? "ind-badge live" : "ind-badge soon"}
              style={{ position: "static" }}
            >
              {current.status === "live" ? "Live" : "Coming soon"}
            </span>
            <h3>{current.name}</h3>
            <span className="sc-tag">{current.tag}</span>
          </div>
        </div>

        <p className="sc-summary">{current.summary}</p>

        <div className="sc-focus">
          {current.focus.map((f) => (
            <span className="model-chip" key={f}>
              {f}
            </span>
          ))}
        </div>

        <div className="sc-foot">
          <span className="sc-pack">{current.pack}</span>
          {current.href ? (
            <Link className="button button-primary" href={current.href}>
              Explore {current.name.split(" ")[0]}
            </Link>
          ) : (
            <Link className="button button-secondary" href="/contact">
              Request early access
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
