import { Layout } from '../components/layout/layout'
import { PlaceholderRow } from '../components/placeholder/placeholder-row'
import { getPlaceholders } from '../sanity/sanity-utils'

const Index = ({ placeholders }) => {
  return (
    <Layout>
      {placeholders.map((row, index) => {
        console.log(row.contentColumnOne + index)
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
  const placeholders = await getPlaceholders()

  return {
    props: {
      placeholders,
    },
  }
}

export default Index
