import { Layout } from '../components/layout/layout'
import { PlaceholderRow } from '../components/placeholder/placeholder-row'
import { API_ENDPOINT } from '../constants/constants'

const Index = ({ landingPageRows }) => {
  return (
    <Layout>
      {landingPageRows.map((row, index) => {
        return (
          <PlaceholderRow
            key={row.contentColumnOne + index}
            row={row}
          />
        )
      })}
    </Layout>
  )
}

// Import Data

export const getStaticProps = async () => {
  const res = await fetch(API_ENDPOINT)
  const data = await res.json()
  const landingPageRows = data.landingPageData

  return {
    props: {
      landingPageRows,
    },
  }
}

export default Index
