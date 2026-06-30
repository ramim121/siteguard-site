import type { CSSProperties } from "react";
import { DetectionFrame } from "@/components/detection-frame";
import { heroFrames, sectionFrames, type FrameData } from "@/lib/content";

/* Generated, on-brand product mockups — drawn in CSS, no screenshots. */

const trendBars = [18, 24, 12, 30, 22, 40, 28, 52, 34, 60, 44, 88];

export function CommandMock() {
  return (
    <div className="mock reveal" aria-hidden="true">
      <div className="mock-bar">
        <span className="wordmark">
          Site<span className="wm-guard">Guard</span>
          <span style={{ color: "var(--sg-ink-text-muted)", fontWeight: 400 }}> · Live Monitor</span>
        </span>
        <span className="status">
          <span className="dot" />
          48 / 48 online
        </span>
      </div>
      <div className="mock-body">
        <div className="mock-kpis">
          <div className="mock-kpi">
            <span className="lbl"><span className="dot" style={{ background: "var(--sg-teal-bright)" }} /> Cameras</span>
            <div className="val">48</div>
          </div>
          <div className="mock-kpi">
            <span className="lbl">Alerts today</span>
            <div className="val">21</div>
          </div>
          <div className="mock-kpi">
            <span className="lbl"><span className="dot" style={{ background: "var(--sg-critical)" }} /> Critical</span>
            <div className="val">1</div>
          </div>
          <div className="mock-kpi">
            <span className="lbl"><span className="dot" style={{ background: "var(--sg-hazard)" }} /> Warning</span>
            <div className="val">20</div>
          </div>
        </div>

        <div className="mock-chart">
          <div className="ch-head">Alerts — last 24 hours</div>
          <div className="mock-bars">
            {trendBars.map((h, i) => (
              <span
                key={i}
                className={i === trendBars.length - 1 ? "bar crit" : "bar"}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mock-list">
          {[
            { t: "Knife / Stick", m: "NYK OLD KI · Zone A · 1h ago", s: "critical" },
            { t: "People Gathering", m: "NYK OLD KI · Zone A · 1h ago", s: "info" },
            { t: "Smoking", m: "NYK NEW FL · Zone B · 2h ago", s: "warning" },
          ].map((r) => (
            <div className="mock-row" key={r.t}>
              <span
                className="thumb"
                style={{ ["--row"]: `var(--sg-${r.s === "critical" ? "critical" : r.s === "warning" ? "hazard" : "behaviour"})` } as CSSProperties}
              />
              <div className="mr-body">
                <div className="mr-title">{r.t}</div>
                <div className="mr-meta">{r.m}</div>
              </div>
              <span className={`mock-pill p-${r.s}`}>
                <span className="dot" />
                {r.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LiveWallMock() {
  const tiles: FrameData[] = [...sectionFrames, ...heroFrames];
  return (
    <div className="mock reveal" aria-hidden="true">
      <div className="mock-bar">
        <span className="wordmark">
          Site<span className="wm-guard">Guard</span>
          <span style={{ color: "var(--sg-ink-text-muted)", fontWeight: 400 }}> · Live · 3×2</span>
        </span>
        <span className="status">
          <span className="dot" />
          6 feeds
        </span>
      </div>
      <div className="mock-body">
        <div className="mock-wall">
          {tiles.map((f) => (
            <DetectionFrame key={f.model} frame={f} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AlertDetailMock() {
  return (
    <div className="mock reveal" aria-hidden="true">
      <div className="mock-detail">
        <div className="md-evidence">
          <DetectionFrame frame={heroFrames[0]} />
        </div>
        <div className="md-panel">
          <h4>Weapon detected</h4>
          <span className="severity-pill s-critical">
            <span className="sev-dot sev-critical" />
            Critical
          </span>
          <div className="md-fields">
            <div className="row"><span className="k">Model</span><span className="v">KnifeStickDetection</span></div>
            <div className="row"><span className="k">Camera</span><span className="v">NYK OLD KI · Zone A</span></div>
            <div className="row"><span className="k">Location</span><span className="v">Old Office · Floor 1</span></div>
            <div className="row"><span className="k">Confidence</span><span className="v">96%</span></div>
            <div className="row"><span className="k">Time</span><span className="v">13:47:34</span></div>
            <div className="row"><span className="k">Status</span><span className="v">Pending</span></div>
          </div>
          <div className="md-actions">
            <span className="button button-primary">✓ Acknowledge</span>
            <span className="button button-danger">Escalate</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const distribution = [
  { name: "Behaviour", pct: "38%", color: "var(--sg-behaviour)" },
  { name: "Threat & Fire", pct: "22%", color: "var(--sg-critical)" },
  { name: "PPE & Compliance", pct: "22%", color: "var(--sg-hazard)" },
  { name: "People & Access", pct: "18%", color: "var(--sg-teal-bright)" },
];

const cameraBars = [40, 88, 30, 64, 22, 52];

export function AnalyticsMock() {
  return (
    <div className="mock reveal" aria-hidden="true">
      <div className="mock-analytics">
        <div className="ma-cell">
          <div className="ma-head">Alert distribution</div>
          <div className="donut">
            <div className="donut-c">
              <b>569</b>
              <span>alerts</span>
            </div>
          </div>
          <div className="ma-legend">
            {distribution.map((d) => (
              <div className="lg" key={d.name}>
                <span className="dot" style={{ background: d.color }} />
                {d.name}
                <span className="pct">{d.pct}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ma-cell">
          <div className="ma-head">Alerts by camera · stacked severity</div>
          <div className="mock-bars" style={{ height: 150 }}>
            {cameraBars.map((h, i) => (
              <span key={i} className={i % 2 === 1 ? "bar" : "bar crit"} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="ma-legend" style={{ marginTop: 16 }}>
            <div className="lg"><span className="dot" style={{ background: "var(--sg-critical)" }} /> Critical <span className="pct">1</span></div>
            <div className="lg"><span className="dot" style={{ background: "var(--sg-hazard)" }} /> Warning <span className="pct">20</span></div>
            <div className="lg"><span className="dot" style={{ background: "var(--sg-behaviour)" }} /> Info <span className="pct">548</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const faceFrame: FrameData = {
  category: "access",
  cam: "CAM 01 · MAIN ENTRANCE",
  zone: "ZONE A",
  timestamp: "29 JUN 2026 · 07:58:14",
  objectTag: "MATCH · ENROLLED",
  model: "FaceRecognition",
  label: "Match · staff",
  confidence: "99",
  glyph: "/brand/face_recognition.png",
};

export function FaceMatchMock() {
  return (
    <div className="mock reveal" aria-hidden="true">
      <div className="mock-face">
        <div className="mf-cam">
          <DetectionFrame frame={faceFrame} />
        </div>
        <div className="mf-panel">
          <div className="mf-person">
            <div className="mf-avatar">R</div>
            <div>
              <div className="mf-name">Enrolled · #1042</div>
              <div className="mf-sub">Staff · verified</div>
            </div>
          </div>
          <div className="md-fields">
            <div className="row"><span className="k">Match confidence</span><span className="v">99%</span></div>
            <div className="row"><span className="k">Age</span><span className="v">Adult</span></div>
            <div className="row"><span className="k">Mask</span><span className="v">None</span></div>
            <div className="row"><span className="k">Glasses</span><span className="v">Yes</span></div>
          </div>
          <span className="button button-primary button-block">View profile</span>
        </div>
      </div>
    </div>
  );
}
