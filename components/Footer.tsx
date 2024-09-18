import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { SanityImageType } from "@/lib/sanity/types";

import Accreditations from "./Accreditations";
import ViewMotionWrapper from "./ViewMotionWrapper";

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

export const ContactDetail = ({
  text,
  icon,
  className = "invert-[1]",
}: {
  text: string;
  icon: any;
  className?: string;
}) => {
  return (
    <div className={`flex text-white gap-2 ${className}`}>
      <Image
        src={icon}
        height={20}
        width={20}
        alt="icon"
        className={className}
      />

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

const Footer: FC<{ accreditations: { logo: SanityImageType }[] }> = ({
  accreditations,
}) => {
  return (
    <footer className="bg-black section-padding flex flex-col gap-10">
      <div>
        <Accreditations accreditations={accreditations} />
      </div>

      <div className="h-[1px] bg-duckEgg w-full" />

      <ViewMotionWrapper
        className="flex lg:flex-row flex-col gap-8"
        duration={1}
      >
        <div className="flex-[0.3] flex flex-col gap-10">
          {/* <LogoWithText /> */}
          <Image
            src={"/logo-blue.svg"}
            height={70}
            width={250}
            alt="Corporate Wellness Logo"
          />

          <div className="flex flex-col gap-6">
            <ContactDetail
              text={`+44 (0) 7554198103`}
              icon={"/phone.svg"}
              className="invert-[unset]"
            />
            <ContactDetail
              text={`info@corporatewellness.co.za`}
              icon={"/email.svg"}
              className="invert-[unset]"
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

        <div className="flex-[0.7] lg:flex-row grid lg:grid-cols-3 grid-cols-2 gap-6 relative">
          <FooterLinks heading={"Quick Links"} links={QUICK_LINKS} />
          <FooterLinks heading={"Services"} links={SERVICES_LINKS} />
          <FooterLinks heading={"Legal"} links={LEGAL_LINKS} />

          <div className="text-white lg:absolute end-0 bottom-0 font-[300] mt-8 lg:block hidden">
            © 2024
            <span className="font-[600]"> Corporate Wellness.</span> All Rights
            Reserved
          </div>
        </div>
        <div className="text-white lg:absolute end-0 bottom-0 font-[300] mt-4 lg:hidden block font-body">
          © 2024
          <span className="font-[600]"> Corporate Wellness.</span> All Rights
          Reserved
        </div>
      </ViewMotionWrapper>
    </footer>
  );
};

export default Footer;
