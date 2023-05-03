import { useEffect } from 'react'
import { SearchCompany } from './search-company'
import { useSiteContext } from '../../context/site-context'
import { getConvertedSearchData, getFilteredCompanies } from '../../utils'

export const SearchResults = ({ allCompanies }) => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSiteContext()

  useEffect(() => {
    isSearchFieldEmpty
      ? setCompanies(allCompanies)
      : setCompanies(getFilteredCompanies(searchField, allCompanies))
  }, [searchField])

  if (!isCompaniesFound && !isSearchFieldEmpty)
    return <h3 className="message-title">No companies found</h3>

  if (isCompaniesFound)
    return (
      <div>
        {companies.map((company, index) => {
          const convertedData = getConvertedSearchData({ ...company })

          return (
            <SearchCompany
              key={index}
              index={index}
              convertedData={convertedData}
            />
          )
        })}
      </div>
    )

  return
}
