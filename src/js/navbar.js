import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import React, { useEffect, useState } from 'react';

// COLOR: #EBD6FB// letters #333333
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`navbar navbar-expand-lg sticky-top ${scrolled ? 'navbar-colored' : 'navbar-transparent'}`}>
      <div className="container-fluid">
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white' }} /></button>
          </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0 navlink">
            <li className="nav-item me-5 nav_btns">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item me-5 nav_btns">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item me-5 nav_btns">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item me-5 nav_btns">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className='col-sm-1 login_con'>
          <a><FontAwesomeIcon icon={faUser} className="fauser" />   LOGIN</a>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
