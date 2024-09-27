import React from "react";

import styles from "../LegalPage.module.scss";
import PageBanner from "@/components/PageBanner";
import Icon from "@/components/logos/Icon";

const PrivacyPolicy = () => {
  return (
    <div className={`${styles.container} relative overflow-hidden`}>
      <PageBanner
        heading="Privacy Policy"
        staticPath
        imagePath="/privacy.png"
        subHeading="Legal"
      />
      <div className="section-padding-x py-[40px] w-full h-full">
        <p className="">
          At Corporate Wellness, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and safeguard the information you provide on our
          website.
        </p>
        <h2 className="heading">Information We Collect</h2>
        <p className="mb-2">We collect the following information:</p>
        <ul>
          <li>Name</li>
          <li>Surname</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
        </ul>
        <h2 className="heading">How We Use Your Information</h2>
        <p className="mb-2">We use the collected information to:</p>
        <ul>
          <li>Contact you regarding your inquiries or requests</li>
          <li>Provide updates on our events and services</li>
          <li>Improve our website and services</li>
          <li>Analyze trends and gather demographic information</li>
          <li>Ensure compliance with legal and regulatory requirements</li>
        </ul>
        <h2 className="heading">Sharing Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information with trusted partners
          and service providers who assist us in operating our website and
          delivering our services, provided that they agree to keep your
          information confidential.
        </p>
        <h2 className="heading">Security Measures</h2>
        <p>
          We employ industry-standard security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction.
        </p>
        <h2 className="heading">Cookie Policy</h2>
        <p>
          We may use cookies on our website to enhance your browsing experience.
          You can adjust your browser settings to refuse cookies, but note that
          this may impact the functionality of certain features on our website.
        </p>
        <h2 className="heading">Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be effective immediately upon posting the
          revised policy on our website.
        </p>
        <h2 className="heading">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at info@corporatewellness.co.za
        </p>
      </div>

      <Icon
        path={{ src: "/logo-icon-blue.png" }}
        className="xl:block lg:hidden md:hidden hidden h-[310px] w-[300px] absolute bottom-[-100px] -end-4 z-10"
      />
    </div>
  );
};

export default PrivacyPolicy;
