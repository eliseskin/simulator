import React from "react";
import DealHeader from "./deal/index";
import Container from "./deal/Row";
import Card from "./deal/Card";
import restauran from "../img/icons/restauran.svg";
import veterinario from "../img/icons/veterinario.svg";
import cyber from "../img/icons/la-seguridad-cibernetica.svg";
import informacion from "../img/icons/informacion.svg";
import telefono from "../img/icons/telefono.svg";
import DHeader from "./deal/container";

const TypeDeal = () => {
  let name = {
    dp: "Areas de negocio",
    p: "¿En que se especializara su empresa?",
  };

  let deals = [
    {
      name: "Veterinaria",
      description: "Venta, Cuidado, Administracion Animal",
      products: "Desparacitantes, Alimentos, Vacunas, Pastizales, Medicinas",
      icons: veterinario,
    },
    {
      name: "Restaurante",
      description: "Venta de Comida Rapidas y Buen gusto",
      products: "Antojitos, Comida Rapida, Bebidas, Jugos",
      icons: restauran,
    },
    {
      name: "Cyber-Caffe",
      description: "Internet, Conectividad, Productos",
      products: "Copias, Impresiones, Estancia, Conectividad",
      icons: cyber,
    },
    {
      name: "Hardware",
      description: "Produsca widgets",
      products: "Gadget, Telefonos, Accesorios, Textil",
      icons: telefono,
    },
    {
      name: "Informacion",
      description: "Buena informacion",
      products: "Redes Sociales, Comercio, Electronico",
      icons: informacion,
    },
  ];
  return (
    <DHeader>
      <DealHeader name={name} />
      <Container>
        {deals.map((deal, i) => (
          <Card deal={deal} key={i} />
        ))}
      </Container>
    </DHeader>
  );
};

export default TypeDeal;
