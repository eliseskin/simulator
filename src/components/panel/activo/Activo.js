import React, { useState } from "react";
import Container from "../../deal/Row";
import Navigation from "../../../routes/navigation";
import Table from "./table";
import { useRef } from "react";
import Alert from "../alet";
import Collapse from "../collapse";
import FooterCard from "../FooterCard";

const Activo = () => {
  const [activo, setActivo] = useState({
    type: "",
    activo: "",
    cantidad: 0,
    costo: 0,
  });

  const inputRef = useRef(null);

  const [arrayActivos, setArrayActivos] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const arreglo = [...arrayActivos, activo];
    await setArrayActivos(arreglo);
    inputRef.current.focus();
  };

  const handleInput = (e) => {
    let activos = activo;
    activos[e.target.name] = e.target.value;
    setActivo(activos);
  };

  return (
    <>
      <Navigation />
      <Container>
        <div className="col-md-12">
          <Alert>
            Agregar datos de los equipos y mobiliario que contendra el negocio
            inicial estos deben constar con los minimos mas edificio o lugar.
          </Alert>
          <div className="card card-body my-2">
            <h5 className="card-title text-center">
              Activos Para la Instalacion Inicial
            </h5>
            <Collapse>Agregar Nuevo Activo</Collapse>
            <div className="collapse" id="collapseExample">
              <form className="mb-2" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      ref={inputRef}
                      className="form-control"
                      name="activo"
                      onChange={handleInput}
                      placeholder="Activo"
                    />
                  </div>
                  <div className="col-auto">
                    <select
                      name="type"
                      onChange={handleInput}
                      className="custom-select"
                    >
                      <option>Abrir selecion menu tipo activo</option>
                      <option value="me" name="type">
                        Mobiliario y Equipo de Oficina
                      </option>
                      <option value="ec" name="type">
                        Equipo de Computo
                      </option>
                      <option value="ed" name="type">
                        Edificios
                      </option>
                    </select>
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      name="cantidad"
                      onChange={handleInput}
                      placeholder="Cantidad"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="costo"
                      className="form-control"
                      onChange={handleInput}
                      placeholder="Costo"
                    />
                  </div>
                  <div className="col">
                    <button type="submit" className="btn btn-block btn-primary">
                      Agregar Activo
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <Container>
              <div className="col-md-6">
                <div className="card text-center">
                  <h5 className="card-header">Mobiliario y Equipo Oficina</h5>
                </div>
                <div className="card-body">
                  <Table>
                    {arrayActivos
                      .filter((t) => t.type === "me")
                      .map((me, i) => (
                        <>
                          <tr>
                            <td>{i}</td>
                            <td>{me.activo}</td>
                            <td>{me.cantidad}</td>
                            <td>{me.costo}</td>
                            <td>{me.cantidad * me.costo}</td>
                          </tr>
                        </>
                      ))}
                  </Table>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card text-center">
                  <h5 className="card-header">Equipo de Computo</h5>
                </div>
                <div className="card-body">
                  <Table>
                    {arrayActivos
                      .filter((t) => t.type === "ec")
                      .map((ec, i) => (
                        <>
                          <tr>
                            <td>{i}</td>
                            <td>{ec.activo}</td>
                            <td>{ec.cantidad}</td>
                            <td>{ec.costo}</td>
                            <td>{ec.cantidad * ec.costo}</td>
                          </tr>
                        </>
                      ))}
                  </Table>
                </div>
              </div>
            </Container>
            <Container>
              <div className="col-md-6 offset-md-3">
                <div className="card text-center">
                  <h5 className="card-header">Costo Lugar E Instalacion</h5>
                </div>
                <div className="card-body">
                  <Table>
                    {arrayActivos
                      .filter((t) => t.type === "ed")
                      .map((ec, i) => (
                        <>
                          <tr>
                            <td>{i}</td>
                            <td>{ec.activo}</td>
                            <td>{ec.cantidad}</td>
                            <td>{ec.costo}</td>
                            <td>{ec.cantidad * ec.costo}</td>
                          </tr>
                        </>
                      ))}
                  </Table>
                </div>
              </div>
            </Container>
            <FooterCard strong="Cuadro Inversiones">
              Agregar los datos necesarios proseguir al
            </FooterCard>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Activo;
