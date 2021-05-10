import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">✍🏻</Link>

        <span role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/random">
            Random Quote
          </Link>

          <Link className="navbar-item" to="/all">
            All Quotes
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar