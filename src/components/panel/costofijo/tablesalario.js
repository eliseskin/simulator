import React from "react";

const TableSalarios = (props) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <td>Personal - Area</td>
        <td>Salario Mensual</td>
        <td>Salario Anual</td>
        <td>Seguro Social Mensual</td>
        <td>Seguro Social Anual</td>
      </tr>
    </thead>
    <tbody>{props.children}</tbody>
  </table>
);

export default TableSalarios;
