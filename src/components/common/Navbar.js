import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isActive, setIsActive] = React.useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">✍🏻</Link>

        <span role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={handleClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/random">
            Random Quote
          </Link>

          <Link className="navbar-item" to="/all">
            Quotes
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar