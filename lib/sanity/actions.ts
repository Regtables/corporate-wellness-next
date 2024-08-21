import { sanityClient } from "./client"
import { fetchHomePageQuery } from "./queries"
import { SanityFetchHomePageOperation } from "./types"

export const sanityFetchHomePageContent = async () => {
  const page = await sanityClient.fetch<SanityFetchHomePageOperation>(fetchHomePageQuery)

  return page[0]
}