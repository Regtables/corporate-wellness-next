import React from "react";
import Accreditations from "./Accreditations";
import Logo from "./logos/Logo";
import LogoWithText from "./logos/LogoWithText";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import { sanityFetchAccreditationsLogos } from "@/lib/sanity/actions";
import Image from "next/image";

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

const ContactDetail = ({ text, icon }: { text: string; icon: any }) => {
  return (
    <div className="flex text-white gap-2">
      <Image src={icon} height={20} width={20} alt="icon" />

      {text}
    </div>
  );
};

const FooterLinks = ({ heading, links }: { heading: string; links: any[] }) => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-heading text-duckEgg font-bold text-[24px]">
        {heading}
      </h4>

      <div className="flex flex-col font-[300] font-body gap-6">
        {links.map((link, i) => (
          <Link href={link.slug}>
            <div className="text-white capitalize">{link.link}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Footer = async () => {
  const accreditations = await sanityFetchAccreditationsLogos();

  return (
    <footer className="bg-black px-[195px] py-[100px] flex flex-col gap-10">
      <div>
        <Accreditations accreditations={accreditations} />
      </div>

      <div className="h-[1px] bg-duckEgg w-full" />

      <div className="flex">
        <div className="flex-[0.3] flex flex-col gap-10">
          {/* <LogoWithText /> */}
          <Image src={"/logo-blue.svg"} height={70} width={250} alt="Corporate Wellness Logo"/>

          <div className="flex flex-col gap-6">
            <ContactDetail text={`021 456 789`} icon={"/phone.svg"} />
            <ContactDetail
              text={`info@corporatewellness.co.za`}
              icon={"/email.svg"}
            />

            <div className="flex gap-3">
              <a>
                <Image
                  src={"/instagram.svg"}
                  height={20}
                  width={20}
                  alt="icon"
                />
              </a>
              <a>
                <Image src={"/linkdin.svg"} height={20} width={20} alt="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-[0.7] grid grid-cols-3 relative">
          <FooterLinks heading={"Quick Links"} links={QUICK_LINKS} />
          <FooterLinks heading={"Services"} links={SERVICES_LINKS} />
          <FooterLinks heading={"Legal"} links={LEGAL_LINKS} />

          <div className="text-white absolute end-0 bottom-0 font-[300]">
            © 2024
            <span className="font-[600]"> Corporate Wellness.</span> All Rights
            Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
