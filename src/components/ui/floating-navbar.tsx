"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const linkClassName = cn(
  "relative flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 sm:px-4 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white",
);

function NavItemLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
}

export const FloatingNav = ({
  navItems,
  className,
  loginHref = "https://app.cal.com",
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
  loginHref?: string;
}) => {
  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-[5000] flex justify-center px-4 pt-4",
        className,
      )}
      aria-label="Main"
    >
      <div className="flex max-w-[min(100%,44rem)] flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/80 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/10 dark:bg-black/50 sm:flex-nowrap">
        <div className="flex flex-wrap items-center justify-center gap-1 sm:flex-nowrap">
          {navItems.map((navItem, idx) => (
            <NavItemLink key={`link-${idx}`} href={navItem.link}>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </NavItemLink>
          ))}
        </div>

        <div className="hidden h-5 w-px shrink-0 bg-neutral-200 sm:block dark:bg-white/10" />

        <a
          href={loginHref}
          target="_blank"
          rel="noopener noreferrer"
          className="relative shrink-0 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20 dark:bg-white dark:text-black dark:hover:bg-neutral-100 dark:hover:shadow-white/20"
        >
          <span>Login</span>
        </a>
      </div>
    </nav>
  );
};
