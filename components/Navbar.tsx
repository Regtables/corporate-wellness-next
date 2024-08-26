"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import LogoWithText from "./logos/LogoWithText";
import BasicButton from "./buttons/BasicButton";
import { cn } from "@/lib/utils";

const LINKS = [
  {
    link: "home",
    slug: "#home",
  },
  {
    link: "about us",
    slug: "#about",
  },
  {
    link: "our approach",
    slug: "#about",
  },
  {
    link: "services",
    slug: "#services",
    pages: [
      {
        link: "Individual Coaching",
        slug: "/services/individual-coaching",
      },
      {
        link: "Team Coaching",
        slug: "/services/team-coaching",
      },
      {
        link: "HR Consulting",
        slug: "/services/hr-consulting",
      },
    ],
  },
  {
    link: "our process",
    slug: "#process",
  },
  {
    link: "testimonials",
    slug: "#testimonials",
  },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const threshold = 50;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - lastScrollY) >= threshold) {
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "flex w-full py-[30px] items-center justify-between px-section bg-white fixed top-0 left-0 z-20 transition-transform duration-500",
        !showNavbar && "-translate-y-[120px]"
      )}
      role="navigation"
      aria-label="Main"
    >
      <LogoWithText />

      <ul className="flex gap-10 list-none" role="menubar">
        {LINKS.map((link, i) => (
          <li key={i} role="none">
            <a
              href={link.slug}
              className="capitalize font-[400] text-black tracking-[-0.04em] text-[16px]"
              role={link.pages ? "menuitem" : undefined}
              aria-haspopup={link.pages ? "true" : undefined}
              aria-expanded={link.pages ? "false" : undefined}
            >
              {link.link}
            </a>

            {link.pages && (
              <ul
                role="menu"
                aria-label={`${link.link} submenu`}
                className="hidden"
              >
                {link.pages.map((sublink, j) => (
                  <li key={j} role="none">
                    <a
                      href={sublink.slug}
                      className="capitalize font-[400] text-black tracking-[-0.04em] font-body"
                      role="menuitem"
                    >
                      {sublink.link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <Link href={"#contact"} passHref>
        <BasicButton
          text="contact us"
          bgColor="var(--color-duckEgg)"
          color="black"
          aria-label="Contact us"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
