import Link from 'next/link'

export const SearchCompany = ({ convertedData, index }) => (
  <Link
    className="search-company"
    href={`/company/${index}`}>
    <article className="search-article">
      {convertedData.map(({ title, paragraphOne, paragraphTwo }, index) => (
        <div
          key={title + index}
          className="search-content">
          <h4>{title}</h4>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
      ))}
    </article>
  </Link>
)
