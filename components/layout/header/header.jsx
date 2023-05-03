import Link from 'next/link'
import { headerData } from './header-data'

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">CVR - Business in Denmark</h1>
      <div className="header-container">
        {headerData.map(({ text, link }, index) => (
          <Link
            className="header-link"
            href={link}
            key={link + index}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  )
}
