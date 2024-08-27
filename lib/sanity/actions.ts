import { sanityClient } from "./client"
import { fetchAccreditationsQuery, fetchAllServicesQuery, fetchHomePageQuery, fetchServiceContentQuery } from "./queries"
import { SanityFetchAllServicesOperation, SanityFetchHomePageOperation, SanityFetchServiceContentOperation } from "./types"

export const sanityFetchHomePageContent = async () => {
  const page = await sanityClient.fetch<SanityFetchHomePageOperation>(fetchHomePageQuery)

  return page[0]
}

export const sanityFetchAllServices = async () => {
  const services = await sanityClient.fetch<SanityFetchAllServicesOperation>(fetchAllServicesQuery)

  return services
}

export const sanityFetchServiceContent = async (service: string) => {
  const page = await sanityClient.fetch<SanityFetchServiceContentOperation>(fetchServiceContentQuery(service))

  return page[0]
}

export const sanityFetchAccreditationsLogos = async () => {
  const accreditations = await sanityClient.fetch(fetchAccreditationsQuery)
  
  return accreditations
}