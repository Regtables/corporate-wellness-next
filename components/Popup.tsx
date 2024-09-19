"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext"
import { cn } from "@/lib/utils";

interface PopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  isAlert?: boolean;
  isLoading?: boolean;
  opacity?: number;
  fade?: boolean;
  color?: string;
  onClick?: () => void;
  h_0?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  children,
  isOpen,
  isAlert = false,
  isLoading = false,
  opacity = 90,
  fade = false,
  color = '#000000',
  onClick,
  h_0 = false,
}) => {
  const { handleModalClose } = useModal();
  const contentRef = useRef<HTMLDivElement>(null);
  const validOpacity = Math.max(0, Math.min(100, opacity));
  const hexOpacity = Math.round((validOpacity / 100) * 255).toString(16).padStart(2, '0');

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      console.log(e.target)
      if (!isAlert && contentRef.current && !contentRef.current.contains(e.target as Node)) {
        handleModalClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isAlert, handleModalClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(
            "fixed z-40 top-0 left-0 bottom-0 w-screen h-screen content-none",
            isLoading && "z-[100]"
          )}
          style={{ backgroundColor: `${color}${hexOpacity}` }}
          onClick={onClick}
          initial={fade ? { opacity: 0 } : {}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          id="popup"
        >
          <div
            className={cn(
              "flex flex-col items-center justify-center h-screen",
              h_0 ? "h-0" : "min-h-full"
            )}
            ref={contentRef}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;