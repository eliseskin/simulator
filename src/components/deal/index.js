import React from "react";
import PropTypes from "prop-types";
const DealHeader = ({ name }) => (
  <>
    <h1 className="display-4 mt-5">{name.dp}</h1>
    <p className="my-2">{name.p}</p>
  </>
);

DealHeader.propTypes = {
  name: PropTypes.shape({
    dp: PropTypes.string,
    p: PropTypes.string,
  }).isRequired,
};

export default DealHeader;
