import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/panel" className="navbar-brand">
          Simulador
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="" className="nav-link">
                Activos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Activos
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="" className="dropdown-item">
                  Actions
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
