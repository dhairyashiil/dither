"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconBook,
  IconBrandGithub,
  IconBrandX,
  IconLink,
} from "@tabler/icons-react";

const iconClass =
  "h-4 w-4 text-slate-600 transition-colors group-hover:text-orange-600";

const navItems = [
  {
    name: "Cal.com",
    link: "https://cal.com",
    icon: <IconLink className={iconClass} />,
  },
  {
    name: "Docs",
    link: "https://cal.com/docs",
    icon: <IconBook className={iconClass} />,
  },
  {
    name: "GitHub",
    link: "https://github.com/calcom/cal.com",
    icon: <IconBrandGithub className={iconClass} />,
  },
  {
    name: "X",
    link: "https://x.com/calcom",
    icon: <IconBrandX className={iconClass} />,
  },
];

export function HomeNavbar() {
  return <FloatingNav navItems={navItems} loginHref="https://app.cal.com" />;
}
