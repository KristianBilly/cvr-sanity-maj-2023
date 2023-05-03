import { useState } from 'react'
import { VirkopediaArticle } from '../../components/virkopedia/virkopedia-article'
import { VirkopediaTab } from '../../components/virkopedia/virkopedia-tab'
import { API_ENDPOINT } from '../../constants/constants'
import { Layout } from '../../components/layout/layout'

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

// Import Data

export const getStaticProps = async () => {
  const res = await fetch(API_ENDPOINT)
  const data = await res.json()

  const articles = data.virkopediaData

  return {
    props: {
      articles,
    },
  }
}

export default Virkopedia
