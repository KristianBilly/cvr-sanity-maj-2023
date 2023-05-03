import { getConvertedCompanyData } from '../../utils/get-converted-company-data'
import { CompanyTable } from '../../components/company/company-table'
import Link from 'next/link'
import { SEARCH_PATH } from '../../constants/constants'
import { getCompanies, getCompaniesPaths } from '../../sanity/sanity-utils'

const Company = ({ selectedCompany }) => {
  const { companyName } = selectedCompany
  const formattedCompany = getConvertedCompanyData(selectedCompany)

  if (!selectedCompany) return <h2>Loading...</h2>

  return (
    <section className="company-page">
      <Link
        className="back-to-search"
        href={SEARCH_PATH}>
        Back to search
      </Link>
      <h2> {companyName} </h2>
      <CompanyTable company={formattedCompany} />
    </section>
  )
}

export const getStaticProps = async ({ previewData, params }) => {
  const allCompanies = await getCompanies()
  const selectedCompany = allCompanies?.find(
    (company) => company.slug === params.slug
  )

  return {
    props: {
      selectedCompany,
    },
  }
}

export async function getStaticPaths() {
  const companyPaths = await getCompaniesPaths()

  return {
    paths: companyPaths?.map((slug) => `/companies/${slug}`),
    fallback: false,
  }
}

export default Company
