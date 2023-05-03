import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import {
  getProject,
  getProjectsPaths,
  resolveHref,
} from '../../sanity/sanity-utils'

export default function Project({ project }) {
  const { name, url, content, image } = project

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {name}
        </h1>
        <a
          href={url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
          View Project
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={content} />
      </div>

      <Image
        src={image}
        alt={name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  )
}

export const getStaticProps = async ({ previewData, params }) => {
  const project = await getProject(params.uid)

  return {
    props: {
      project,
    },
  }
}

export async function getStaticPaths() {
  const projectPaths = await getProjectsPaths()
  const mappedPaths =
    projectPaths?.map((slug) => resolveHref('project', slug)) || []

  return {
    paths: mappedPaths,
    fallback: false,
  }
}
