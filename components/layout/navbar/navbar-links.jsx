import Link from 'next/link'
import { useSiteContext } from '../../../context/site-context'

export const NavbarLinks = ({ linksContainerRef, linksRef }) => {
  const { isDarkTheme, toggleTheme } = useSiteContext()

  return (
    <div
      className="links-container"
      ref={linksContainerRef}>
      <ul
        className="links"
        ref={linksRef}>
        <button
          className="theme-btn"
          onClick={() => toggleTheme()}>
          {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
        </button>
        <Link
          href="admin"
          className="theme-btn">
          Admin
        </Link>
      </ul>
    </div>
  )
}
