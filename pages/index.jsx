import { PlaceholderRow } from '../components/placeholder/placeholder-row'
import { getPlaceholders } from '../sanity/sanity-utils'

const Index = ({ placeholders }) => {
  return (
    <>
      {placeholders.map((row, index) => {
        return (
          <PlaceholderRow
            key={row.contentColumnOne + index}
            row={row}
          />
        )
      })}
    </>
  )
}

export const getStaticProps = async () => {
  const placeholders = await getPlaceholders()

  return {
    props: {
      placeholders,
    },
  }
}

export default Index
