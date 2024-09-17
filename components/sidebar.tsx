"use client";
import React from "react";
import Image from "next/image";
import DataCard from "./data-card";
import {
  Buildings,
  CalendarDots,
  DeviceMobile,
  Lifebuoy,
  NewspaperClipping,
  Notepad,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
const dataCards = [
  {
    title: "Claims",
    value: "17",
    isActive: true,
    icon: NewspaperClipping,
    href: "/claims",
  },
  {
    title: "Employees",
    value: "3,456",
    isActive: false,
    icon: UsersThree,
    href: "/employees",
  },
  {
    title: "Devices",
    value: "128",
    isActive: false,
    icon: DeviceMobile,
    href: "/devices",
  },
];

const URLS = [
  {
    title: "Rental Schedule",
    href: "/rental-schedule",
    icon: CalendarDots,
    isActive: false,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: Notepad,
    isActive: false,
  },
  {
    title: "Organisation",
    href: "/organisation",
    icon: Buildings,
    isActive: false,
  },
  {
    title: "Support",
    href: "/support",
    icon: Lifebuoy,
    isActive: false,
  },
];
const Sidebar = () => {
  const currentPath = usePathname();

  const updatedDataCards = dataCards.map((url) => ({
    ...url,
    isActive: url.href === currentPath,
  }));
  const updatedURLs = URLS.map((url) => ({
    ...url,
    isActive: url.href === currentPath,
  }));

  return (
    <div className="fixed p-6  w-72 flex flex-col gap-4">
      <div className="pl-5 flex gap-2 items-center">
        <Image src="/tortoise.svg" alt="tortoise" width={30} height={30} />
        <p className="text-lg text-[#B8AFA4] font-semibold">tortoise</p>
      </div>
      <hr className="border" />
      <div className="space-y-1">
        {updatedDataCards.map((card, index) => (
          <DataCard
            key={index}
            title={card.title}
            value={card.value}
            isActive={card.isActive}
            icon={card.icon}
            href={card.href}
          />
        ))}
      </div>
      <hr className="border" />
      <div className="space-y-5 pl-4">
        {updatedURLs.map((url, index) => (
          <Link key={index} href={url.href} className="flex items-center gap-3">
            <url.icon weight="duotone" size={28} />
            <p className="font-semibold text-sm">{url.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
