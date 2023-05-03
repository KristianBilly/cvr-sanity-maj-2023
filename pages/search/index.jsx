import { TextInput } from '../../components/other/text-input'
import { SearchResults } from '../../components/search/search-results'
import { useSiteContext } from '../../context/site-context'
import { getCompanies } from '../../sanity/sanity-utils'

const SearchWrapper = ({ allCompanies }) => {
  const { searchField, setSearchField } = useSiteContext()

  return (
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
  )
}

export const getStaticProps = async () => {
  const allCompanies = await getCompanies()

  return {
    props: {
      allCompanies,
    },
  }
}

export default SearchWrapper
