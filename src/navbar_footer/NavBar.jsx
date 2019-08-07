import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return(
    <div className="NavBar">
      <div className="title">
        <NavLink activeClassName="active" exact to="/"><img src="/images/logos/logo_mt.png" alt="Logo" /></NavLink>
      </div>
      <div>
      <h1>MATHIAS TUJAGUE</h1>
      </div>
      <nav className="navi">
        <ul className="Header">
          <li><NavLink activeClassName="active" exact to="/">Accueil</NavLink></li>
          <li><NavLink activeClassName="active" to="/cv">CV</NavLink></li>
          <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
          <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar;