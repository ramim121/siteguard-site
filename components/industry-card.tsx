import Link from "next/link";
import { IconMark, type IconName } from "@/components/icon-mark";

type Industry = {
  slug: string;
  name: string;
  tag: string;
  icon: IconName;
  pack: string;
  summary: string;
  focus: string[];
  status: "live" | "soon";
  href?: string;
};

export function IndustryCard({
  industry,
  showFocus = true,
}: {
  industry: Industry;
  showFocus?: boolean;
}) {
  const inner = (
    <>
      <span className={industry.status === "live" ? "ind-badge live" : "ind-badge soon"}>
        {industry.status === "live" ? "Live" : "Soon"}
      </span>
      <div className="ind-head">
        <span className="ind-icon">
          <IconMark name={industry.icon} />
        </span>
        <h3>{industry.name}</h3>
      </div>
      <div className="ind-body">
        <span className="tag">{industry.tag}</span>
        <p>{industry.summary}</p>
        {showFocus ? (
          <div className="ind-focus">
            {industry.focus.map((f) => (
              <span className="model-chip" key={f}>
                {f}
              </span>
            ))}
          </div>
        ) : null}
        <span className="ind-foot">{industry.pack} →</span>
      </div>
    </>
  );

  return industry.href ? (
    <Link className="ind-card reveal" href={industry.href}>
      {inner}
    </Link>
  ) : (
    <div className="ind-card reveal">{inner}</div>
  );
}
