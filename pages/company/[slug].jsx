import { getConvertedCompanyData } from '../../utils/get-converted-company-data'
import { CompanyTable } from '../../components/company/company-table'
import Link from 'next/link'
import { API_ENDPOINT, SEARCH_PATH } from '../../constants/constants'
import { Layout } from '../../components/layout/layout'
import { getCompanies, getCompaniesPaths } from '../../sanity/sanity-utils'

const Company = ({ selectedCompany }) => {
  const formattedCompany = getConvertedCompanyData(selectedCompany)
  const companyName = selectedCompany?.companyName

  if (!formattedCompany) return <h2>No companies found...</h2>

  return (
    <Layout>
      <section className="company-page">
        <Link
          className="back-to-search"
          href={SEARCH_PATH}>
          Back to search
        </Link>
        <h2> {companyName} </h2>
        <CompanyTable company={formattedCompany} />
      </section>
    </Layout>
  )
}

export const getStaticProps = async ({ previewData, params }) => {
  const companies = await getCompanies()
  const selectedCompany = companies[params.slug]

  return {
    props: {
      selectedCompany,
    },
  }
}

export async function getStaticPaths() {
  const pagePaths = await getCompaniesPaths()
  const mappedPaths =
    pagePaths?.map((slug) => resolveHref('companies', slug)) || []

  return {
    paths: mappedPaths,
    fallback: false,
  }
}

// Import Data

// export const getStaticProps = async ({ params }) => {
//   const res = await fetch(API_ENDPOINT)
//   const data = await res.json()

//   const selectedCompany = data?.companiesData[params.uid]

//   return {
//     props: {
//       selectedCompany,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const res = await fetch(API_ENDPOINT)
//   const data = await res.json()

//   const paths = data.companiesData.map(({ uid }) => ({
//     params: { uid },
//   }))

//   return {
//     paths: paths,
//     fallback: false,
//   }
// }

export default Company
