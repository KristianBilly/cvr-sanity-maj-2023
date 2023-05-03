import { Layout } from '../../components/layout/layout'
import { TextInput } from '../../components/other/text-input'
import { SearchResults } from '../../components/search/search-results'
import { API_ENDPOINT } from '../../constants/constants'
import { useSiteContext } from '../../context/site-context'

const SearchWrapper = ({ allCompanies }) => {
  const { searchField, setSearchField } = useSiteContext()

  return (
    <Layout>
      <div className="search">
        <div className="search-container">
          <h2 className="search-title">Search the CVR</h2>
          <TextInput
            search
            type="search"
            value={searchField}
            placeholder="Write Company Name, Cvr Number or Address"
            onChange={(e) => setSearchField(e.target.value)}
            autoFocus
          />
          <SearchResults allCompanies={allCompanies} />
        </div>
      </div>
    </Layout>
  )
}

// Import Data

export const getStaticProps = async () => {
  const res = await fetch(API_ENDPOINT)
  const data = await res.json()
  const allCompanies = data.companiesData

  return {
    props: {
      allCompanies,
    },
  }
}

export default SearchWrapper
