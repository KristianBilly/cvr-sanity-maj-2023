import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'

export function resolveHref(documentType, slug) {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'project':
      return slug ? `/projects/${slug}` : undefined
    case 'companies':
      return slug ? `/companies/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}

export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getPage(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

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
    groq`*[_type == "virkopodia"]{
      _id,
      _createdAt,
      title,
      content
    }`
  )
}

export async function getCompanies() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "companies"]{
      _id,
      _createdAt,
      uid,
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

export async function getPagesPaths() {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "page" && slug.current != null].slug.current
    `
  )
}

export async function getProjectsPaths() {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "project" && slug.current != null].slug.current
    `
  )
}
