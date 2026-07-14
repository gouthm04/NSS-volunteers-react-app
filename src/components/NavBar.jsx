import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">NSS Volunteer System</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Add Volunteer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/view">View Volunteers</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
