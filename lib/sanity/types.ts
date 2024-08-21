export type SanityFetchHomePageOperation = {
  heroSection: SanityHeroSection
}[]

export type SanityHeroSection = {
  title: string,
  backgroundImages: SanityImageType[]
  subtitle: string,
  bodyText: string
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