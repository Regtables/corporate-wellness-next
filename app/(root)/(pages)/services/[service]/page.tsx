import React from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import {
  sanityFetchAllServices,
  sanityFetchServiceContent,
} from "@/lib/sanity/actions";

import PageBanner from "@/components/PageBanner";
import ServiceIntroductionSection from "@/components/ServiceIntroductionSection";

export const generateStaticParams = async () => {
  const services = await sanityFetchAllServices();

  return services.map((service) => ({
    params: {
      service: service.slug.current,
    },
  }));
};

export const generateMetaData = async ({}) => {};

const ServicePage = async ({ params }: { params: Params }) => {
  const { service } = params;

  const { name, introductionSection, bannerImage } =
    await sanityFetchServiceContent(service);

  return (
    <div className="flex flex-col gap-[100px]">
      <PageBanner
        heading={name}
        subHeading="services"
        image={bannerImage}
        icon=""
      />

      <ServiceIntroductionSection
        headingWithBlockText={introductionSection.headingWithBlockText}
        image={introductionSection.image}
      />
    </div>
  );
};

export default ServicePage;
