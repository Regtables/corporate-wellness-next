export const fetchHomePageQuery = `*[_type == "homePage"]{heroSection, aboutSection, approachSection, servicesSection{ heading, services[]-> }, imageBanner1 }`;
