import React from "react";

const Alert = (props) => {
  return (
    <div
      className="mt-2 alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {props.children}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
