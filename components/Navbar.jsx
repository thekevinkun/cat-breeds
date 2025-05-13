"use client"

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import { MenuToggle, MotionDiv } from "@/components";

import { menuList } from "@/data/menu";
import { slideIn } from "@/lib/motion";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  }

  return (
    <nav className="nav">
      <MenuToggle toggle={toggleMenu} isOpen={isOpenMenu} />

      <AnimatePresence>
        {isOpenMenu &&
          <MotionDiv 
            variants={slideIn("right", "tween", 0.35)}
            initial="hidden"
            animate="show" 
            exit="exit"
            className="nav__menu"
          >
            <ul className="nav__menu-list">
              {menuList.map((item) => (
                <li key={item.name} className="menu-link_list">
                  <Link 
                    href={item.link} 
                    className="link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>
        }
      </AnimatePresence>
    </nav>
  )
}

export default Navbar;