import { PortableText } from '@portabletext/react'
import { getPage, getPagesPaths, resolveHref } from '../sanity/sanity-utils'

export default function Page({ page }) {
  const { title, content } = page

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={content} />
      </div>
    </div>
  )
}

// Import Data

export const getStaticProps = async ({ previewData, params }) => {
  const page = await getPage(params.uid)

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const pagePaths = await getPagesPaths()
  const mappedPaths = pagePaths?.map((slug) => resolveHref('page', slug)) || []

  return {
    paths: mappedPaths,
    fallback: false,
  }
}
