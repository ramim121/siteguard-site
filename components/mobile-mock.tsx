import { IconMark } from "@/components/icon-mark";

const alerts = [
  { name: "Fall · Scaffold L4", meta: "FallDetection · 95% · 4m ago", severity: "critical" },
  { name: "Smoking · Washroom 3", meta: "SmokingAlarm · 93% · 6m ago", severity: "warning" },
  { name: "No Helmet · Tower zone", meta: "NoHelmetDetection · 94% · 9m ago", severity: "warning" },
  { name: "People gathering · Yard", meta: "PeopleGathering · 12 people · 14m", severity: "info" },
  { name: "Visitor match · Reception", meta: "FaceRecognition · 99% · 27m ago", severity: "access" },
];

/**
 * On-brand mobile-app mock — a phone frame with a critical push notification
 * banner over a live alert list. Built from the brand's "In Use · Mobile app"
 * reference (no screenshot needed).
 */
export function MobileMock() {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        {/* push notification */}
        <div className="push-toast">
          <span className="pt-icon">
            <IconMark name="bell" />
          </span>
          <div className="pt-body">
            <div className="pt-top">
              <span>SiteGuard</span>
              <span>now</span>
            </div>
            <div className="pt-title">Critical: Weapon detected at Gate A</div>
            <div className="pt-sub">KnifeStickDetection · 96% · tap to view live</div>
          </div>
        </div>

        <div className="phone-app-head">
          <span className="wordmark">
            Site<span className="wm-guard">Guard</span>
          </span>
          <span className="time">9:42</span>
        </div>
        <div className="phone-alert-list">
          {alerts.map((alert) => (
            <div className="phone-alert" key={alert.name}>
              <span className={`pa-dot sev-${alert.severity}`} />
              <span className="sr-only">{alert.severity} severity</span>
              <div className="pa-body">
                <div className="pa-title">{alert.name}</div>
                <div className="pa-meta">{alert.meta}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="phone-cta">
          <span className="button button-primary">View live feeds</span>
        </div>
      </div>
    </div>
  );
}
