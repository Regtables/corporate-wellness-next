import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'omeyou46',
  useCdn: true,
  dataset: "production",
  apiVersion: '2024-08-19',
  token: process.env.SANITY_TOKEN
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)