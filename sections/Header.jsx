"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("main-sentinel");

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Entry is intersecting when sentinel is in viewport
        setIsHidden(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-150px 0px 0px 0px",
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <header id="header" className={`header padding ${isHidden ? "hide" : ""}`}>
      <Link 
          href="/"
          className="header__logo-wrapper"
      >
          <h1 className="header-logo">
              Cat
              <br />
              <span className="logo__text-bottom">Breeds</span>
          </h1>       
      </Link>

      <Navbar />
    </header>
  )
}

export default Header;