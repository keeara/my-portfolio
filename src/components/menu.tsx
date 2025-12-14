"use client";

import { Briefcase, CircleUserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

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
  const [sliderStyle, setSliderStyle] = useState({ opacity: 0 });
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeIndex = menuItems.findIndex((item) => item.href === pathname);
    const activeItem = itemsRef.current[activeIndex];

    if (activeItem) {
      setSliderStyle({
        transform: `translateX(${activeItem.offsetLeft}px)`,
        width: `${activeItem.offsetWidth}px`,
        opacity: 1,
      });
    }
  }, [pathname]);

  return (
    <div className="top-0 z-20 flex w-full items-center justify-center px-4 py-2">
      <div
        ref={containerRef}
        className="relative flex items-center gap-2 rounded-2xl border border-white/20 bg-card-bg p-1 shadow-md backdrop-blur-md"
      >
        {/* Sliding bubble */}
        <div
          className="absolute h-[calc(100%-8px)] rounded-xl bg-inner-card-bg transition-all duration-300 ease-in-out"
          style={sliderStyle}
        />

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <Link
            ref={(el) => (itemsRef.current[index] = el)}
            href={item.href}
            key={item.title}
            className={`z-10 flex items-center justify-center gap-2 rounded-xl px-4 py-1 transition-colors ${
              pathname === item.href ? "text-white" : "text-gray-400"
            }`}
          >
            <div>{item.icon}</div>
            <div className="hidden md:block">{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
