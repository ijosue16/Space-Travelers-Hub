import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import planetimg from './image assets/planet.png';

const NavBar = () => (
  <>
    <nav className="navbar bg-body-tertiary d-flex flex-row px-3 pb-5 pt-3">
      <div className="navbar-brand d-flex align-items-center gap-2">
        <img src={planetimg} alt="Logo" width="60" height="60" className="d-inline-block align-text-top" />
        <h2 className="m-0 text-wrap">Space traveler&apos;s Hub</h2>
      </div>
      <ul className="navbar-nav d-flex flex-row gap-3 text-end align-items-center nav-pills ">
        <NavLink className="text-decoration-none rockets" to="/">Rockets</NavLink>
        <NavLink className="text-decoration-none  missions" to="/Missions">Missions</NavLink>
        <div>|</div>
        <NavLink className="text-decoration-none  my-profile" to="/Myprofile">My profile</NavLink>
      </ul>
    </nav>
  </>
);
export default NavBar;
