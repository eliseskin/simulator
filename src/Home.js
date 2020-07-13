import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <hr />
      <div className="jumbotron text-center">
        <h1 className="display-4 font-weight-bold">Empezando a Emprender</h1>
        <p className="lead font-weight-bold">
          Empieza a generar ganancias en el mundo.
        </p>
        <p className="lead">Un simulador de negocios</p>
        <hr className="my-4" />
        <p className="lead">Un mejor modelado de factibilidad.</p>
        <Link to="/start" className="btn btn-primary btn-lg mx-1">
          Nuevo Emprededor
        </Link>
        <Link to="/" className="btn btn-secondary btn-lg mx-1">
          Cargar Emprendedor
        </Link>
        <p className="lead font-weight-bold my-3">Hora de trabajar</p>
      </div>
    </div>
  );
};

export default Home;
