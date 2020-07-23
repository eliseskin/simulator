import React, { useRef, useState } from "react";
import Navigation from "../../../routes/navigation";
import Container from "../../deal/Row";
import Alert from "../alet";
import Collapse from "../collapse";
import TableSalarios from "./tablesalario";

const Salarios = () => {
  const inputRef = useRef(null);
  const [personal, setPersonal] = useState("");
  const [salario, setSalario] = useState(0);
  const [ssm, setSsm] = useState(0);
  const [sueldos, setSueldos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let sueldo = {
      personal: personal,
      salario: salario,
      ssm: ssm,
    };
    const array = [...sueldos, sueldo];
    setSueldos(array);
    inputRef.current.focus();
  };

  return (
    <>
      <Navigation />
      <Container>
        <div className="col-md-12">
          <Alert>
            Ahora saldra en las ventas de navegacion los presupuestos estimados
            por areas que cupara el negocio.
          </Alert>
          <div className="card card-body my-2">
            <h5 className="card-title text-center">
              Pagos de areas y salarios
            </h5>
            <Collapse>Agregar Salario</Collapse>
            <div className="collapse" id="collapseExample">
              <form className="mb-2" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      ref={inputRef}
                      name="personal"
                      className="form-control"
                      onChange={(e) => setPersonal(e.target.value)}
                      placeholder="Personal o Area"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="salario"
                      className="form-control"
                      onChange={(e) => setSalario(e.target.value)}
                      placeholder="Salario Mensual"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="ssm"
                      className="form-control"
                      onChange={(e) => setSsm(e.target.value)}
                      placeholder="Seguro Social Mensual"
                    />
                  </div>
                  <div className="col">
                    <button type="submit" className="btn btn-primary btn-block">
                      Agregar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <Container>
              <div className="col-md-12">
                <div className="card text-center">
                  <h5 className="card-header">Sueldos y Salarios</h5>
                </div>
                <div className="card-body">
                  <TableSalarios>
                    {sueldos.map((s, i) => (
                      <tr>
                        <td>{s.personal}</td>
                        <td>{s.salario}</td>
                        <td>{s.salario * 12}</td>
                        <td>{s.ssm}</td>
                        <td>{s.ssm * 12}</td>
                      </tr>
                    ))}
                  </TableSalarios>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Salarios;
