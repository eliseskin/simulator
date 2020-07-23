import React from "react";

const TableProd = (props) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <td>#</td>
        <td>Producto Venta</td>
        <td>Unidades</td>
        <td>Precio</td>
        <td>Importe</td>
      </tr>
    </thead>
    <tbody>{props.children}</tbody>
  </table>
);

export default TableProd;
