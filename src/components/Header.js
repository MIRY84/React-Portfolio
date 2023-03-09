

import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="nav-item" href='#'>My Portfolio</a>     
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">     
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <NavLink
            to="React-Portfolio/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="React-Portfolio/projects"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Project Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="React-Portfolio/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="React-Portfolio/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </li>        
      </ul>
    </div>
  </nav>
  )
}

export default Header;
