import React from "react";

const FooterCard = (props) => (
  <div className="card-footer text-muted text-center">
    {props.children}
    <strong> {props.strong}</strong>
  </div>
);

export default FooterCard;
