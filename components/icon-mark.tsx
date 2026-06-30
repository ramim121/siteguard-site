import {
  Activity,
  BellRing,
  Building2,
  Camera,
  Car,
  ChefHat,
  Clock,
  Cpu,
  Factory,
  FileBarChart2,
  Flame,
  Fuel,
  HardHat,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  Leaf,
  Mail,
  MapPinned,
  Phone,
  Plug,
  Radar,
  Route,
  ScanSearch,
  School,
  ShieldCheck,
  Store,
  Truck,
  UserRound,
  Users,
  Warehouse,
  Zap,
} from "lucide-react";

const icons = {
  activity: Activity,
  bell: BellRing,
  building: Building2,
  camera: Camera,
  car: Car,
  chefHat: ChefHat,
  clock: Clock,
  cpu: Cpu,
  dashboard: LayoutDashboard,
  factory: Factory,
  fileChart: FileBarChart2,
  flame: Flame,
  fuel: Fuel,
  hardHat: HardHat,
  heart: HeartPulse,
  landmark: Landmark,
  leaf: Leaf,
  mail: Mail,
  mapPin: MapPinned,
  phone: Phone,
  plug: Plug,
  radar: Radar,
  route: Route,
  scan: ScanSearch,
  school: School,
  shield: ShieldCheck,
  store: Store,
  truck: Truck,
  user: UserRound,
  users: Users,
  warehouse: Warehouse,
  zap: Zap,
};

export type IconName = keyof typeof icons;

type IconMarkProps = {
  name: IconName;
  className?: string;
};

export function IconMark({ name, className }: IconMarkProps) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.6} />;
}
