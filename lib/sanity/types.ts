export type SanityFetchHomePageOperation = {
  heroSection: SanityHeroSection,
  aboutSection: SanitySection,
  approachSection: {
    sectionContent: SanitySection,
    approaches: {
      name: string,
      description: string
    }[]
  },
  servicesSection: {
    heading: string,
    services: {
      name: string,
      description: string
    }[]
  },
  imageBanner1: SanityImageType,
  generalProcess: SanityProcessSection,
  testimonialSection: SanityTestimonialsSection,
  imageBanner2: SanityImageType
}[]

export type SanityFetchAllServicesOperation = {
  name: string,
  slug: {
    current: string
  },
}[]

export type SanityFetchServiceContentOperation = {
  name: string,
  slug: {
    current: string
  },
  description: string,
  bannerImage: SanityImageType
  introductionSection: SanitySection
  imageBanner1: SanityImageType
  imageBanner2: SanityImageType
  objectivesSection: {
    heading: string,
    image: SanityImageType,
    objectives: ServiceObjectiveType[]
  },
  processSection: SanityProcessSection,
  benefitsSection: {
    heading: string,
    benefits: {
      name: string,
      description: string
    }[]
  },
  contactSection: {
    heading: string,
    subheading: string
  }
}[]

export type ServiceObjectiveType = {
  title: string,
  description: string
}

export type SanityTestimonialsSection = {
  heading: string,
  testimonials: SanityTestimonialType[]
}

export type SanityTestimonialType = {
  name: string,
  position?: string,
  company?: string,
  country?: string,
  text: string
}

export type SanityProcessSection = {
  heading: string,
  processSteps: SanityProcessStepType[]
  icon?: any
}

export type SanityProcessStepType = {
  name: string,
  tasks: string[]
}

export type SanityHeroSection = {
  title: string,
  backgroundImages: SanityImageType[]
  subtitle: string,
  bodyText: string
}

export type SanityHeadingWithBlockText = {
  heading: string,
  text: SanityBlockText
}


export type SanityBlockText = {
  children: {
    marks: string[],
    text: string,
    _key: string
  }[],
  markDefs: string[],
  style: string,
  _key: string
}[]

export type SanitySection = {
  image: SanityImageType
  _type: 'sectionContent',
  headingWithBlockText: SanityHeadingWithBlockText
}

export type SanityImageType = {
  image: {
    asset: {
      _ref: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
  };
  alt: string;
}