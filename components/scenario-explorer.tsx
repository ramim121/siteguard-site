"use client";

import Link from "next/link";
import { useState } from "react";
import { IconMark } from "@/components/icon-mark";
import { scenarioPacks } from "@/lib/content";

export function ScenarioExplorer() {
  const [active, setActive] = useState(scenarioPacks[0].slug);
  const current = scenarioPacks.find((p) => p.slug === active) ?? scenarioPacks[0];

  return (
    <div className="scx reveal">
      <div className="scx-tiles" role="group" aria-label="Scenario packs">
        {scenarioPacks.map((pack) => {
          const on = pack.slug === active;
          return (
            <button
              type="button"
              key={pack.slug}
              aria-pressed={on}
              className={on ? "scx-tile scx-tile-on" : "scx-tile"}
              onClick={() => setActive(pack.slug)}
            >
              <span className="scx-tile-icon">
                <IconMark name={pack.icon} />
              </span>
              <span className="scx-tile-name">{pack.name}</span>
              <span className="scx-tile-count">{pack.count}</span>
              {pack.badge ? <span className="scx-badge">{pack.badge}</span> : null}
            </button>
          );
        })}
      </div>

      <div className="scx-detail">
        <div className="scx-detail-head">
          <span className="scx-detail-icon">
            <IconMark name={current.icon} />
          </span>
          <div>
            <h3>
              {current.name}
              {current.badge ? <span className="scx-badge inline">{current.badge}</span> : null}
            </h3>
            <span className="scx-focus">{current.focus}</span>
          </div>
        </div>

        <p className="scx-why">{current.why}</p>

        <div className="scx-models">
          <span className="scx-models-label">Included models</span>
          <div className="scx-model-chips">
            {current.models.map((m) => (
              <span className="model-chip" key={m}>
                {m}
              </span>
            ))}
          </div>
        </div>

        {current.href ? (
          <div className="scx-actions">
            <Link className="button button-primary" href={current.href}>
              Explore SiteGuard for Banking
            </Link>
            <Link className="button button-secondary-ink" href="/contact">
              Talk to us
            </Link>
          </div>
        ) : (
          <Link className="button button-primary" href="/contact">
            Deploy the {current.name} pack
          </Link>
        )}
      </div>
    </div>
  );
}
