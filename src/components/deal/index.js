import React from "react";

const DealHeader = (props) => (
  <>
    <h1 className="display-4 mt-5">{props.name.dp}</h1>
    <p className="my-2">{props.name.p}</p>
  </>
);

export default DealHeader;
