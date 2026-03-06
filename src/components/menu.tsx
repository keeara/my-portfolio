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
  const [sliderStyle, setSliderStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSlider = () => {
      const activeIndex = menuItems.findIndex((item) => item.href === pathname);
      const activeItem = itemsRef.current[activeIndex];
      const container = containerRef.current;

      if (activeItem && container) {
        const itemRect = activeItem.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setSliderStyle({
          transform: `translateX(${itemRect.left - containerRect.left}px)`,
          width: `${itemRect.width}px`,
          opacity: 1,
        });
      }
    };

    // Need a small timeout to ensure layout is stable
    const timeoutId = setTimeout(updateSlider, 50);
    window.addEventListener("resize", updateSlider);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateSlider);
    };
  }, [pathname]);

  return (
    <div
      className="top-0 z-20 flex w-full items-center justify-center px-4 py-2"
      role="navigation"
    >
      <div
        ref={containerRef}
        className="relative flex items-center rounded-2xl border border-white/20 bg-card-bg p-1.5 shadow-md backdrop-blur-md overflow-hidden"
      >
        {/* Sliding bubble */}
        <div
          className="absolute left-0 top-1.5 bottom-1.5 rounded-xl bg-inner-card-bg transition-all duration-300 ease-in-out"
          style={sliderStyle}
        />

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <Link
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            href={item.href}
            key={item.title}
            replace // This will prevent adding new entries to the history stack
            className={`z-10 flex h-10 min-w-[3.5rem] items-center justify-center rounded-xl px-4 md:px-6 transition-colors duration-300 ease-in-out ${
              pathname === item.href ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center">
                {item.icon}
              </div>
              <span className="hidden md:inline">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
