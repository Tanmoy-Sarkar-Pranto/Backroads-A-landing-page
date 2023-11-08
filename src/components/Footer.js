const { pageLinks, externalLinks } = require("../data")

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.href} className="footer-link">
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="footer-icons">
          {externalLinks.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={item.classId}></i>
                </a>
              </li>
            )
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  )
}
export default Footer
