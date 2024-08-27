export const fetchHomePageQuery = `
  *[_type == "homePage"]{
    heroSection, 
    aboutSection, 
    approachSection, 
    servicesSection { 
      heading, 
      services[]-> 
    }, 
    imageBanner1, 
    generalProcess, 
    testimonialSection, 
    imageBanner2 
  }
`;

export const fetchAllServicesQuery = `*[_type == "service"]{ _id, name, slug{ current} }`

export const fetchServiceContentQuery = (service: string) => `*[_type == "service" && slug.current == "${service}"]`

export const fetchAccreditationsQuery = '*[_type == "accreditation"]'
