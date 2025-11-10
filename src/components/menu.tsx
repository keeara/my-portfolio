"use client";

import { BookMarked, Briefcase, CircleUserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

type MenuItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export default function Menu() {

  const menuItems: MenuItem[] = [
    {
      title: "About me",
      href: "/",
      icon: <CircleUserRound className="h-4 w-4" fill="#FFFFFF30" />,
    },
    {
      title: "Career",
      href: "/career",
      icon: <Briefcase className="h-4 w-4" fill="#FFFFFF30" />,
    },
  ];

  return (
    <div className="top-0 z-20 flex w-full items-center justify-between px-4 py-2">
      <div className="m-auto flex gap-2 rounded-2xl border border-white/20 bg-[#0000004d] px-1 py-1 shadow-md backdrop-blur-md">
        {menuItems.map((item) => (
          <MenuItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ item }: { item: MenuItem }) {
  const pathname = usePathname();

  return (
    <Link href={item.href}>
      <div
        className={
          item.href === pathname
            ? "flex items-center gap-2 rounded-xl border border-white/20 bg-[#9595954d] px-4 py-1"
            : "flex items-center gap-2 rounded-xl border border-white/0 px-4 py-1"
        }
      >
        <div>{item.icon}</div>
        <div className="hidden md:block">{item.title}</div>
      </div>
    </Link>
  );
}
