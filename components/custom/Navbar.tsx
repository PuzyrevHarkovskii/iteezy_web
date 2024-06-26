"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FiDollarSign, FiArrowUp, FiBook } from "react-icons/fi";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "В начало",
      link: "/",
      icon: <FiArrowUp className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "Отзывы",
    //   link: "/about",
    //   icon: <FiBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
  );
};
