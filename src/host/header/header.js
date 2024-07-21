import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for Offcanvas
import * as bootstrap from 'bootstrap'; // Import Bootstrap JS for Offcanvas


const Header = ({ buttons }) => {

  useEffect(() => {
    const handleResize = () => {
      const offcanvas = document.getElementById('offcanvasNavbar');
      if (window.innerWidth > 768 && offcanvas.classList.contains('show')) {
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
        if (offcanvasInstance) {
          offcanvasInstance.hide();
        }
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Navbar for all screens */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
        <i className="fas fa-user-secret" style={{ fontSize: '30px' }}></i> {/* Font Awesome icon */}
          Personal
          </Link>
        {/* Hamburger menu button, visible on screens <= 768px */}
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links, visible on screens > 768px */}
        <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {buttons.map((button, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={button.to}>{button.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Offcanvas Sidebar for screens <= 768px, sliding from the right */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {buttons.map((button, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={button.to}>{button.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
