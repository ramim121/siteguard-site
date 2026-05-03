import {
  Activity,
  AlertTriangle,
  BellRing,
  Building2,
  Camera,
  Factory,
  HardHat,
  Landmark,
  LayoutDashboard,
  Mail,
  MapPinned,
  Phone,
  Radar,
  ShieldCheck,
  UserRound,
  Users,
  Warehouse,
} from "lucide-react";

const icons = {
  activity: Activity,
  alert: AlertTriangle,
  bell: BellRing,
  building: Building2,
  camera: Camera,
  factory: Factory,
  hardHat: HardHat,
  landmark: Landmark,
  dashboard: LayoutDashboard,
  mail: Mail,
  mapPin: MapPinned,
  phone: Phone,
  radar: Radar,
  shield: ShieldCheck,
  user: UserRound,
  users: Users,
  warehouse: Warehouse,
};

export type IconName = keyof typeof icons;

type IconMarkProps = {
  name: IconName;
  className?: string;
};

export function IconMark({ name, className }: IconMarkProps) {
  const Icon = icons[name];

  return <Icon className={className} strokeWidth={1.8} />;
}
