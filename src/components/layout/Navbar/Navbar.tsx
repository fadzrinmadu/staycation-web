"use client"

import React, { useState } from "react";
import clsx from "clsx";

import { Logo } from "@/components/ui";
import { MenuIcon } from "@/assets/images/icons";
import { menus } from "./menu";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeId, setActiveId] = useState("home");
  
  const handleToggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  }
  
  const handleSetActive = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setActiveId(id);
  }
  
  return (
    <div className={clsx("relative h-20 py-7 flex justify-between items-center")}>
      <Logo 
        onClick={() => {}} 
      />
      <button 
        onClick={handleToggleMenu} 
        aria-expanded={toggleMenu}
        className={clsx("w-12 h-12 flex justify-end items-center cursor-pointer block md:hidden")}
      >
        <MenuIcon />
      </button>
      <ul
        className={clsx(`
          absolute md:static top-[88px] left-0 right-0
          flex flex-col md:flex-row
          gap-y-3 md:gap-x-12
          py-4 md:py-0
          overflow-hidden 
          bg-gray-100 md:bg-transparent 
          text-center 
          transition-all duration-300 ease-in-out`,
          toggleMenu ? "min-h-[260px] md:min-h-auto opacity-100" : "min-h-0 md:min-h-auto opacity-0 md:opacity-100"
        )}
      >
        {menus.map((menu) => (
          <li key={menu.id}>
            <a
              href={menu.href}
              onClick={(e) => handleSetActive(e, menu.id)}
              className={clsx(
                "py-3 block transition-colors",
                activeId === menu.id ? "text-[#2749DE]" : "text-[#152C5B]"
              )}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Navbar };
