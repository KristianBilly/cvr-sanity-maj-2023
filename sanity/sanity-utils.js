import { createClient, groq } from 'next-sanity'
import { clientConfig } from './config/client-config'

export async function getPlaceholders() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "placeholders"]{
      _id,
      _createdAt,
      numberOfColumns,
      titleColumnOne,
      contentColumnOne,
      titleColumnTwo,
      contentColumnTwo,
      titleColumnThree,
      contentColumnThree,
    }`
  )
}

export async function getVirkopediaArticles() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "virkopodia"] {
      _id,
      _createdAt,
      title,
      content,
      richText,
      "imageUrl": image.asset->url,
      image,
      button,
      imagePositionTop,
      lastEdited
    }`
  )
}

export async function getCompanies() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "companies"]{
      _id,
      _createdAt,
      slug,
      cvrNumber,
      companyName,
      address,
      postNoCity,
      companyType,
      status
    }`
  )
}

export async function getCompaniesPaths() {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "companies" && slug.current != null].slug.current
    `
  )
}
