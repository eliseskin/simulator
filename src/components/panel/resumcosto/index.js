import React from "react";
import Navigation from "../../../routes/navigation";
import Container from "../../deal/Row";
import { useRef } from "react";
import { useState } from "react";
import Alert from "../alet";
import Collapse from "../collapse";
import FooterCard from "../FooterCard";
import TableProd from "./table";

const Resumen = () => {
  const [name, setName] = useState("");
  const [unidad, setUnidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [productos, setProductos] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let objVenta = {
      name: name,
      unidad: unidad,
      precio: precio,
    };
    const array = [...productos, objVenta];
    setProductos(array);
    inputRef.current.focus();
  };

  return (
    <>
      <Navigation />
      <Container>
        <div className="col-md-12">
          <Alert>
            Agregar Productos de venta opr unidad con los cuales se surtira mas
            pronto para la venta
          </Alert>
          <div className="card card-body my-2">
            <h5 className="card-title text-center">Produccion o Venta</h5>
            <Collapse>Agregar Produccion a Venta</Collapse>
            <div className="collapse" id="collapseExample">
              <form className="mb-2" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      ref={inputRef}
                      name="name"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Producto o venta"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="unidad"
                      className="form-control"
                      onChange={(e) => setUnidad(e.target.value)}
                      placeholder="Cantidad Unidad"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="precio"
                      className="form-control"
                      onChange={(e) => setPrecio(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <button type="submit" className="btn btn-block btn-primary">
                      Agregar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <Container>
              <div className="col-md-8 offset-md-2">
                <div className="card text-center">
                  <h5 className="card-header">Poductos de Venta Produccion</h5>
                </div>
                <div className="card-body">
                  <TableProd>
                    {productos.map((v, i) => (
                      <tr>
                        <td>{v.name}</td>
                        <td>{v.unidad}</td>
                        <td>{v.precio}</td>
                        <td>{v.unidad + v.precio}</td>
                      </tr>
                    ))}
                  </TableProd>
                </div>
              </div>
            </Container>
            <FooterCard strong="Resumen de Produccion">
              Este apartado indica las cantidades de productos con las que
              inicia
            </FooterCard>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resumen;
