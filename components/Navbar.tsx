  "use client";

  import React, { useState, useEffect } from "react";
  import Link from "next/link";
  import { useRouter, usePathname } from "next/navigation";
  import { AnimatePresence, motion } from "framer-motion";
  import { ChevronDown, MenuIcon } from "lucide-react";

  import { cn } from "@/lib/utils";

  import LogoWithText from "./logos/LogoWithText";
  import BasicButton from "./buttons/BasicButton";
  import MobileNavMenu from "./MobileNavMenu";
import StaggeredMotionWrapper from "./motion/StaggerChildrenMotionWrapper";

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
      slug: "#approach",
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
          link: "HR Consultancy",
          slug: "/services/hr-consultancy",
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
    const router = useRouter();
    const pathname = usePathname();
    const [toggleMenu, setToggleMenu] = useState(false);

    const threshold = 50;

    const handleLinkClick = (link: { link: string; slug: string }) => {
      console.log("clicking");
      router.push(`/${link.slug}`);
      setShowNavbar(false);
    };

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

    const handleMenuToggle = () => {
      if (!toggleMenu) {
        setToggleMenu(true);
      } else {
        setToggleMenu(false);
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
          "flex w-full py-[30px] items-center justify-between section-padding-x bg-white fixed top-0 start-0 end-0 z-20 transition-transform duration-500",
          !showNavbar && "-translate-y-[120px]"
        )}
        role="navigation"
        aria-label="Main"
      >
        <LogoWithText />

        <StaggeredMotionWrapper
          className="lg:flex md:hidden sm:hidden xs:hidden hidden gap-10 list-none"
          duration={0.3}
          y = {-10}
          // role="menubar"
        >
          {LINKS.map((link, i) => (
            <li
              key={i}
              role="none"
              onMouseEnter={() => setHover(link.link)}
              onMouseLeave={() => setHover("")}
              className="relative"
            >
              <div
                className="capitalize font-[400] text-black tracking-[-0.04em] text-[16px] hover:font-bold cursor-pointer flex items-center gap-1 leading-0"
                role={link.pages ? "menuitem" : undefined}
                aria-haspopup={link.pages ? "true" : undefined}
                aria-expanded={link.pages ? "false" : undefined}
              >
                <div onClick={() => handleLinkClick(link)}>{link.link}</div>

                {link.pages && <ChevronDown size={18} />}
              </div>

              <AnimatePresence>
                {link.pages && hover === "services" && (
                  <motion.div
                    role="menu"
                    aria-label={`${link.link} submenu`}
                    className="absolute w-full lg:min-w-[200px] -start-4 z-10 bg-white flex flex-col p-4 gap-2 rounded-xl pt-6"
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
        </StaggeredMotionWrapper>

        <Link
          href={"#contact"}
          passHref
          className="lg:block md:hidden sm:hidden xs:hidden hidden"
        >
          <BasicButton
            text="contact us"
            bgColor="var(--color-duckEgg)"
            color="black"
            aria-label="Contact us"
          />
        </Link>

        <div className="lg:hidden md:block" onClick={handleMenuToggle}>
          <MenuIcon />
        </div>

        <AnimatePresence>
        {toggleMenu && (
          <>
            <motion.div
              className="fixed inset-0 bg-[#000000a3] bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleMenuToggle}
            />
            <MobileNavMenu
              handleClose={handleMenuToggle}
              isOpen={toggleMenu}
              links={LINKS}
            />
          </>
        )}
      </AnimatePresence>
      </nav>
    );
  };

  export default Navbar;
