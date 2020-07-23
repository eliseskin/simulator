import React from "react";

const TableInv = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Mobiliario y Equipo</th>
          <th scope="col">Equipo de Computo</th>
          <th scope="col">Edificio o Lugar</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default TableInv;
