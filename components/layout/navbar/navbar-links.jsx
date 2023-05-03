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
      </ul>
    </div>
  )
}
