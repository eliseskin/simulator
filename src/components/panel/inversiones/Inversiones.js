import React from "react";
import Navigation from "../../../routes/navigation";
import Container from "../../deal/Row";
import TableInv from "./table";
import Alert from "../alet";
import FooterCard from "../FooterCard";

const Inversiones = () => {
  const invAll = [
    {
      me: 2000,
      ec: 4000,
      ed: 5000,
    },
  ];

  return (
    <>
      <Navigation />
      <Container>
        <div className="col-md-12">
          <Alert>
            Total De gasto para el inicio de inversones del negocio esto con el
            plan de ver y contribuir el maximo total
          </Alert>
          <div className="card card-body my-2">
            <h5 className="card-title text-center">
              Inversion Inicial De inversiones General
            </h5>
            <Container>
              <div className="col-md-8 offset-md-2">
                <div className="card text-center">
                  <div className="card-header">Inversion inicial</div>
                </div>
                <div className="card-body">
                  <TableInv>
                    {invAll.map((inv) => (
                      <>
                        <tr>
                          <td>{inv.me}</td>
                          <td>{inv.ec}</td>
                          <td>{inv.ed}</td>
                          <td>{inv.me + inv.ec + inv.ed}</td>
                        </tr>
                      </>
                    ))}
                  </TableInv>
                </div>
              </div>
            </Container>
            <FooterCard strong="Produccion Ventas">
              Ahora puedes agregar productos de inicio en
            </FooterCard>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Inversiones;
