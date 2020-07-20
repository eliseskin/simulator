import React from "react";
import calculator from "../../img/carousel/calculator.jpg";
import person from "../../img/carousel/person.jpg";
import crop from "../../img/carousel/crop.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={calculator} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block bg-secondary">
            <h5>Has crecer tu Negocio</h5>
            <p>Accede a todos los detalles para manejar tu negocio</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={person} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block bg-secondary">
            <h5>Ingresos Responsables</h5>
            <p>Antecednetes de productos y ventas</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={crop} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block bg-secondary">
            <h5>Fiabilidad de los procesos</h5>
            <p>Administre cada tablas con base a las guias documentadas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
