"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const linkClassName = cn(
  "group relative flex shrink-0 cursor-pointer select-none items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-sm font-semibold text-slate-700 transition-[color,background-color,transform] duration-150",
  "hover:bg-slate-200/90 hover:text-slate-950 active:scale-[0.97] active:bg-slate-300/70",
  "sm:px-4 sm:py-2",
  "[&_svg]:pointer-events-none",
  "max-sm:min-h-10 max-sm:min-w-10 max-sm:px-2",
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
        "fixed right-0 left-0 z-[5000] flex justify-center",
        "pt-[max(1rem,env(safe-area-inset-top,0px))]",
        "pl-[max(0.75rem,env(safe-area-inset-left,0px))]",
        "pr-[max(0.75rem,env(safe-area-inset-right,0px))]",
        className,
      )}
      aria-label="Main"
    >
      <div
        className={cn(
          "no-scrollbar flex w-fit max-w-full flex-nowrap items-center gap-1 overflow-x-auto rounded-full border border-slate-300/95",
          "bg-gradient-to-b from-white via-slate-50/98 to-slate-100/90",
          "px-1.5 py-1 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.18),0_2px_8px_-2px_rgba(15,23,42,0.06)]",
          "ring-1 ring-inset ring-white/90 backdrop-blur-xl backdrop-saturate-150",
          "[-webkit-overflow-scrolling:touch] sm:gap-2 sm:px-2 sm:py-1.5",
          "sm:max-w-[min(100%,44rem)] sm:overflow-visible",
        )}
      >
        {navItems.map((navItem, idx) => (
          <NavItemLink key={`link-${idx}`} href={navItem.link}>
            <span className="block sm:hidden [&_svg]:h-[1.125rem] [&_svg]:w-[1.125rem]">
              {navItem.icon}
            </span>
            <span className="hidden sm:block">{navItem.name}</span>
          </NavItemLink>
        ))}

        <div
          className="mx-0.5 h-4 w-px shrink-0 bg-gradient-to-b from-transparent via-slate-400/90 to-transparent sm:mx-0 sm:h-5"
          aria-hidden
        />

        <a
          href={loginHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold text-white transition-[transform,box-shadow,filter] duration-150",
            "max-sm:min-h-10 sm:px-4 sm:py-2 sm:text-sm",
            "bg-gradient-to-b from-orange-500 to-orange-600",
            "shadow-[0_4px_14px_-2px_rgba(234,88,12,0.45)] ring-1 ring-inset ring-white/25",
            "hover:from-orange-600 hover:to-orange-700 hover:shadow-[0_6px_20px_-4px_rgba(234,88,12,0.5)]",
            "active:scale-[0.97]",
          )}
        >
          <span>Login</span>
        </a>
      </div>
    </nav>
  );
};
