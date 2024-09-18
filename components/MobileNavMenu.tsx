import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import BasicButton from "./buttons/BasicButton";
import Icon from "./logos/Icon";
import Swipeable from "./Swipable";

interface MobileNavMenuProps {
  handleClose: () => void;
  isOpen: boolean;
  links: Array<{
    link: string;
    slug: string;
    pages?: Array<{ link: string; slug: string }>;
  }>;
  handleLinkClick: (link: { link: string; slug: string }) => void;
}

const MobileNavMenu: FC<MobileNavMenuProps> = ({
  handleClose,
  isOpen,
  links,
  handleLinkClick
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
      transition={{ duration: 0.3 }}
      exit={"closed"}
    >
      <Swipeable onRight={handleClose}>
        <div className="p-4">
          <nav>
            <ul>
              {links.map((link, index) => (
                <li key={index} className="mb-4">
                  <div 
                    onClick={() => {
                      handleLinkClick(link);
                      handleClose();
                    }}
                    className="text-lg capitalize cursor-pointer"
                  >
                    {link.link}
                  </div>
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

            <BasicButton
              text="contact us"
              bgColor="var(--color-duckEgg)"
              className="mt-4"
              onClick={() => {
                handleLinkClick({ link: "contact us", slug: "#contact" });
                handleClose();
              }}
            />

            <div className="mt-4 flex flex-col gap-2">
              <div className={`flex text-black gap-2`}>
                <Image
                  src={"/phone.svg"}
                  height={20}
                  width={20}
                  alt="icon"
                  className="invert-[1]"
                />
                +44 7554 198103
              </div>
              <div className={`flex text-black gap-2`}>
                <Image
                  src={"/email.svg"}
                  height={20}
                  width={20}
                  alt="icon"
                  className="invert-[1]"
                />
                info@corporatewellness.co.za
              </div>
              <a
                href="https://www.instagram.com/corporatewellness_hub/?igsh=MWhvMWdkbW8wbmJ6bQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <div className={`flex text-black gap-2`}>
                  <Image
                    src={"/instagram.svg"}
                    height={20}
                    width={20}
                    alt="icon"
                    className="invert-[1]"
                  />
                  @corporatewellness_hub
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center flex-grow h-full">
              <Icon
                path={{ src: "/logo-icon-blue.png" }}
                className="h-[170px] w-[150px] relative "
              />
            </div>
          </nav>
        </div>
      </Swipeable>
    </motion.div>
  );
};

export default MobileNavMenu;