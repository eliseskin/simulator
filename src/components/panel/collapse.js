import React from "react";

const Collapse = (props) => (
  <p>
    <button
      className="btn btn-secondary"
      type="button"
      data-toggle="collapse"
      data-target="#collapseExample"
      aria-expanded="false"
      aria-controls="callapseExample"
    >
      {props.children}
    </button>
  </p>
);

export default Collapse;
