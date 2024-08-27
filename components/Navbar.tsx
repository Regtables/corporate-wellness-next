"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import LogoWithText from "./logos/LogoWithText";
import BasicButton from "./buttons/BasicButton";
import { ChevronDown } from "lucide-react";

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
  const [hover, setHover] = useState("");

  const threshold = 50;

  const handleLinkClick = (link: { link: string, slug: string }) => {
    
  }

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
          <li
            key={i}
            role="none"
            onMouseEnter={() => setHover(link.link)}
            onMouseLeave={() => setHover("")}
            className="relative"
            onClick={() => handleLinkClick(link)}
          >
            <div
              className="capitalize font-[400] text-black tracking-[-0.04em] text-[16px] hover:font-bold cursor-pointer flex items-center gap-1 leading-0"
              role={link.pages ? "menuitem" : undefined}
              aria-haspopup={link.pages ? "true" : undefined}
              aria-expanded={link.pages ? "false" : undefined}
            >
              {link.link}


              {link.pages && (
                <ChevronDown size={18}/>
              )}
            </div>

            <AnimatePresence>
              {link.pages && hover === "services" && (
                <motion.div
                  role="menu"
                  aria-label={`${link.link} submenu`}
                  className="absolute w-full min-w-[200px] -start-4 z-10 bg-white flex flex-col p-4 gap-2 rounded-xl pt-6"
                  whileInView={{ opacity: [0, 1] }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: [1, 0] }}
                >
                  {link.pages.map((sublink, j) => (
                      <Link
                        href={sublink.slug}
                        className="capitalize font-[400] text-black tracking-[-0.04em] font-body hover:font-bold transition-all duration-300"
                        role="menuitem"
                      >
                        <div key={j} role="none">
                          {sublink.link}
                        </div>
                      </Link>
                    ))}
                </motion.div>
              )}
            </AnimatePresence>
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
