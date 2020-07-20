import React from "react";

const Table = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Activo</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Costo</th>
          <th scope="col">Importe</th>
        </tr>
      </thead>
      <tbody>
        {props.children}
        <td colSpan="4">Total</td>
      </tbody>
    </table>
  );
};

export default Table;
