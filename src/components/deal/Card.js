import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ deal }) => {
  return (
    <div className="my-1 col-md-3">
      <div className="card">
        <img src={deal.icons} alt={deal.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{deal.name}</h5>
          <p className="card-text">{deal.description}</p>
          <p className="card-text">Tipos de productos:</p>
          <p className="card-text">{deal.products}</p>
          <Link to="/panel" className="btn btn-primary">
            Selecionar
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  deal: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    products: PropTypes.string,
    icons: PropTypes.object,
  }).isRequired,
};

export default Card;
