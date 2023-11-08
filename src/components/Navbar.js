import logo from "../images/logo.svg"
import { pageLinks, externalLinks } from "../data"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.href} className="nav-link">
                    {item.text}
                  </a>
                </li>
              )
            })}
          </ul>

          <ul className="nav-icons">
            {externalLinks.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target="_blank"
                    className="nav-icon"
                    rel="noreferrer"
                  >
                    <i className={item.classId}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
