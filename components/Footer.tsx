import React from "react";
import Accreditations from "./Accreditations";
import Logo from "./logos/Logo";
import LogoWithText from "./logos/LogoWithText";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

const QUICK_LINKS = [
  {
    link: "home",
    slug: "/",
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
    link: "our process",
    slug: "#process",
  },
  {
    link: "testimonials",
    slug: "#testimonials",
  },
  {
    link: "contact us",
    slug: "#contact",
  },
];

const SERVICES_LINKS = [
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
];

const LEGAL_LINKS = [
  {
    link: "privacy policy",
    slug: "/privacy-policy",
  },
  {
    link: "terms & conditions",
    slug: "/terms-and-conditions",
  },
];

const ContactDetail = ({ text, icon } : { text: string, icon: any }) => {
  return (
    <div className="flex text-white">
      <Phone />

      {text}
    </div>
  );
};

const FooterLinks = ({ heading, links } : { heading: string, links: any[] }) => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-heading text-duckEgg font-bold text-[24px]">
        {heading}
      </h4>

      <div className="flex flex-col font-[400] gap-6">
        {links.map((link, i) => (
          <Link href={link.slug}>
            <div className="text-white capitalize">{link.link}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black px-[195px] py-[100px] flex flex-col gap-10">
      <div>
        <Accreditations />
      </div>

      <div className="h-[1px] bg-duckEgg w-full" />

      <div className="flex">
        <div className="flex-[0.3]">
          <LogoWithText />

          <div>
            <ContactDetail text={`021 456 789`} />
            <ContactDetail text={`021 456 789`} />

            <div className="flex gap-3">
              <Facebook color="white" />
              <Instagram color="white" />
              <Linkedin color="white" />
            </div>
          </div>
        </div>

        <div className="flex-[0.7] grid grid-cols-3">
          <FooterLinks heading={"Quick Links"} links={QUICK_LINKS} />
          <FooterLinks heading={"Services"} links={SERVICES_LINKS} />
          <FooterLinks heading={"Legal"} links={LEGAL_LINKS} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
