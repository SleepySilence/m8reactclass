import { Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <li><Link className="nav__link" to="/">Home</Link></li>
        <li><Link className="nav__link" to="/about">About</Link></li>
        <li><Link className="nav__link" to="/games">Games</Link></li>
        <li><Link className="nav__link" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
