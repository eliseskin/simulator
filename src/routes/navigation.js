import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ name }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/panel" className="navbar-brand">
          Negocio - {name}
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
              <Link to="/panel" className="nav-link">
                Panel
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
                <Link to="/panel/activo" className="dropdown-item">
                  Cuadro Actions
                </Link>
                <Link to="/panel/inversiones" className="dropdown-item">
                  Cuadro Inversiones
                </Link>
                <Link to="/panel/coste" className="dropdown-item">
                  Precio Costo
                </Link>
              </div>
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
                Tipos Costo
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/panel/salarios" className="dropdown-item">
                  Cuadro Actions
                </Link>
                <Link to="/panel/generales" className="dropdown-item">
                  Cuadro Inversiones
                </Link>
                <Link to="/panel/coste" className="dropdown-item">
                  Precio Venta y P.E.
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
