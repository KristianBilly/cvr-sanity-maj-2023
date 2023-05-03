import { useState } from 'react'
import { VirkopediaArticle } from '../../components/virkopedia/virkopedia-article'
import { VirkopediaTab } from '../../components/virkopedia/virkopedia-tab'
import { Layout } from '../../components/layout/layout'
import { getVirkopediaArticles } from '../../sanity/sanity-utils'

const Virkopedia = ({ articles }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { content, title } = articles[activeButtonIndex]

  return (
    <Layout>
      <div className="virkopedia">
        <h2>Virkopedia</h2>
        <div className="virkopedia-container">
          <div className="btn-container">
            {articles.map(({ title }, index) => (
              <VirkopediaTab
                key={title + index}
                setActiveButtonIndex={setActiveButtonIndex}
                title={title}
                index={index}
                activeButtonIndex={activeButtonIndex}
              />
            ))}
          </div>
          <VirkopediaArticle
            title={title}
            content={content}
          />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ previewData }) => {
  const articles = await getVirkopediaArticles()

  return {
    props: {
      articles,
    },
  }
}

export default Virkopedia
