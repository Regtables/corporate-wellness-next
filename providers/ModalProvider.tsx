"use client";

import React, { useEffect, useState } from "react";

import FormSuccessModal from "@/components/modals/FormSuccessModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <FormSuccessModal />
    </>
  );
};

export default ModalProvider;
