import {
  Bot,
  Cpu,
  Activity,
  Database,
  Globe,
  ShieldCheck,
} from "lucide-react";

export const stats = [
  {
    title: "AI Agents",
    value: "12",
    change: "+12%",
    icon: Bot,
  },
  {
    title: "Requests",
    value: "2.4M",
    change: "+8%",
    icon: Activity,
  },
  {
    title: "Models",
    value: "34",
    change: "+4%",
    icon: Database,
  },
  {
    title: "Providers",
    value: "8",
    change: "+3%",
    icon: Globe,
  },
  {
    title: "CPU Usage",
    value: "61%",
    change: "+1%",
    icon: Cpu,
  },
  {
    title: "Success Rate",
    value: "99.8%",
    change: "+0.3%",
    icon: ShieldCheck,
  },
];