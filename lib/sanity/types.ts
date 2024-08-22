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
  imageBanner1: SanityImageType
}[]

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