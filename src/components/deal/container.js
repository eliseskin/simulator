import React from "react";

const DHeader = (props) => (
  <div className="container mt-5">
    <div className="row d-flex flex-column">{props.children}</div>
  </div>
);

export default DHeader;
