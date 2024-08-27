import { sanityClient } from "./client"
import { fetchAllServicesQuery, fetchHomePageQuery, fetchServiceContentQuery } from "./queries"
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

  console.log(page)

  return page[0]
}