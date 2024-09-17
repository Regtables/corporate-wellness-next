import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { ContactDetail } from "@/components/Footer";
import BasicButton from "./buttons/BasicButton";
import Icon from "./logos/Icon";

interface MobileNavMenuProps {
  handleClose: () => void;
  isOpen: boolean;
  links: Array<{
    link: string;
    slug: string;
    pages?: Array<{ link: string; slug: string }>;
  }>;
}

const MobileNavMenu: FC<MobileNavMenuProps> = ({
  handleClose,
  isOpen,
  links,
}) => {
  const menuVariants = {
    closed: {
      x: "100%",
    },
    open: {
      x: 0,
    },
  };

  return (
    <motion.div
      className="fixed top-[80px] bottom-0 right-0 w-72 bg-white shadow-sm z-50 overflow-y-auto flex flex-col border-t-[1px] border-[#d1cdcd]"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      // transition={{ type: "spring", stiffness: 300, damping: 30 }}
      transition={{ duration: 0.3 }}
      exit={"closed"}
    >
      <div className="p-4">
        <nav>
          {/* <h2 className="">Corporate Wellness</h2> */}
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-4">
                <Link
                  href={link.slug}
                  onClick={handleClose}
                  className="text-lg capitalize"
                >
                  {link.link}
                </Link>
                {link.pages && (
                  <ul className="ml-4 mt-2">
                    {link.pages.map((sublink, subIndex) => (
                      <li key={subIndex} className="mb-2">
                        <Link
                          href={sublink.slug}
                          onClick={handleClose}
                          className="text-base capitalize"
                        >
                          {sublink.link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <BasicButton text="contact us" bgColor="var(--color-duckEgg)" className="mt-4"/>

          <div className="mt-4">
            <ContactDetail text={`021 456 789`} icon={"/phone.svg"} className="text-[var(--color-black)]"/>
            <ContactDetail
              text={`info@corporatewellness.co.za`}
              icon={"/email.svg"}
              className="text-[var(--color-black)]"
            />
          </div>

          
            <div className="flex gap-3 mt-4">
              <a>
                <Image
                  src={"/instagram.svg"}
                  height={20}
                  width={20}
                  alt="icon"
                  className="invert-[1]"
                />
              </a>
              <a>
                <Image src={"/linkdin.svg"} height={20} width={20} alt="icon" className="invert-[1]"/>
              </a>
            </div>

            <div className="flex items-center justify-center flex-grow-[1]">
              <Icon path={{ src: '/logo-icon-blue.png' }} className="h-[170px] w-[150px] relative " />
            </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileNavMenu;
