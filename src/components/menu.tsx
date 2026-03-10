"use client";

import { Briefcase, CircleUserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

type MenuItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
  {
    title: "About me",
    href: "/",
    icon: <CircleUserRound className="h-4 w-4" />,
  },
  {
    title: "Career",
    href: "/career",
    icon: <Briefcase className="h-4 w-4" />,
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <div
      className="top-0 z-20 flex w-full items-center justify-center px-4 py-2"
      role="navigation"
    >
      <div className="relative flex items-center rounded-full border border-white/20 bg-card-bg p-1 shadow-md backdrop-blur-md overflow-hidden">
        {/* Menu Items */}
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            replace // This will prevent adding new entries to the history stack
            className={`relative z-10 flex items-center justify-center gap-2 rounded-full px-4 py-1.5 md:px-6 md:py-1.5 transition-colors duration-300 ease-in-out ${
              pathname === item.href
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {pathname === item.href && (
              <motion.div
                layoutId="active-indicator"
                className="absolute inset-0 z-[-1] rounded-full bg-inner-card-bg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {item.icon}
            <span className="hidden md:inline">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
