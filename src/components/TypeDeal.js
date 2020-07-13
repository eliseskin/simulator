import React from "react";
import DealHeader from "./deal/index";
import DHeader from "./deal/container";

const TypeDeal = () => {
  let name = {
    dp: "Areas de negocio",
    p: "¿En que se especializara su empresa?",
  };
  return (
    <DHeader>
      <DealHeader name={name} />
    </DHeader>
  );
};

export default TypeDeal;
