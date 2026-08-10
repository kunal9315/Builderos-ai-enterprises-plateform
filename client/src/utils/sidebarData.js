import {
  LayoutDashboard,
  Bot,
  FolderKanban,
  Workflow,
  BookOpen,
  FileText,
  Boxes,
  Plug,
  FlaskConical,
  Folder,
  Cpu,
  BarChart3,
  Code2,
  Activity,
  Store,
  CreditCard,
  Settings,
  UserCircle,
} from "lucide-react";

export const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/admin/dashboard",
  },

  {
    icon: Bot,
    label: "AI Agents",
    path: "/admin/agents",
  },

  {
    icon: FolderKanban,
    label: "Projects",
    path: "/admin/projects",
  },

  {
    icon: Workflow,
    label: "Workflows",
    path: "/admin/workflows",
  },

  {
    icon: BookOpen,
    label: "Knowledge",
    path: "/admin/knowledge",
  },

  {
    icon: FileText,
    label: "Prompts",
    path: "/admin/prompts",
  },

  {
    icon: Boxes,
    label: "Models",
    path: "/admin/models",
  },

  {
    icon: Plug,
    label: "Providers",
    path: "/admin/providers",
  },

  {
    icon: FlaskConical,
    label: "Playground",
    path: "/admin/playground",
  },

  {
    icon: Folder,
    label: "Files",
    path: "/admin/files",
  },

  {
    icon: Cpu,
    label: "Automation",
    path: "/admin/automation",
  },

  {
    icon: BarChart3,
    label: "Analytics",
    path: "/admin/analytics",
  },

  {
    icon: Code2,
    label: "Developers",
    path: "/admin/developers",
  },

  {
    icon: Activity,
    label: "Monitoring",
    path: "/admin/monitoring",
  },

  {
    icon: Store,
    label: "Marketplace",
    path: "/admin/marketplace",
  },

  {
    icon: CreditCard,
    label: "Billing",
    path: "/admin/billing",
  },

  {
    icon: Settings,
    label: "Settings",
    path: "/admin/settings",
  },

  {
    icon: UserCircle,
    label: "User Profile",
    path: "/admin/profile",
  },
];