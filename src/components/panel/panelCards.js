import React from "react";
import { Link } from "react-router-dom";

const PanelCards = () => {
  return (
    <>
      <div className="col-md-4 mt-2">
        <div className="card">
          <div className="card-header">Activos - Pasos Seguir</div>
          <div className="card-body">
            <h5 className="card-title">Inicio de Activos</h5>
            <div className="card-text">
              Para comenzar debe aceder desde la pestana superior derecha al
              apartado activos, hay veran los pasos a en orden acendente de
              selecccion atravez de cada panel.
            </div>
            <hr className="my-4" />
            <Link className="card-link" to="/panel/activo">
              Empieza Activos
            </Link>
            <Link className="card-link" to="/panel/inversiones">
              Ver cuadro inversion
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-2">
        <div className="card">
          <div className="card-header">Costos - Pasos Seguir</div>
          <div className="card-body">
            <h5 className="card-title">Inicio de Costos</h5>
            <div className="card-text">
              Antes debe terminar los panel de Activos de la barra superior
              derecha terminado proceguir en esta ventana, la cual sera los
              pasos de los gastos genenerales entre equipos rentas
            </div>
            <hr className="my-4" />
            <Link className="card-link" to="/panel/inversiones">
              Agregar costos
            </Link>
            <Link className="card-link" to="/panel/activo">
              Resumen General
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-2">
        <div className="card">
          <div className="card-header">Gastos e Ingresos - Administracion</div>
          <div className="card-body">
            <h5 className="card-title">Actividad de Produccion</h5>
            <div className="card-text">
              Agregar Ingresos por produccion, establecer valores de venta,
              agregar y manejar costos pagos e impuestos, todo el control de
              flujo de el negocio personal a medida.
            </div>
            <hr className="my-4" />
            <Link className="card-link" to="/panel/activo">
              Resumen Ingresos
            </Link>
            <Link className="card-link" to="/panel/activo">
              Resumen Produccion
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelCards;
