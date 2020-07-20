import React from "react";
import Navigation from "../../routes/navigation";
import PanelCards from "./panelCards";
import Container from "../deal/Row";
import Carousel from "./carousel";
import { useEffect } from "react";
import { useState } from "react";

const Panel = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    let nameDeal = localStorage.getItem("nameDeal");
    setName(nameDeal);
  }, []);
  return (
    <>
      <Navigation name={name} />
      <Container>
        <Carousel />
      </Container>
      <Container>
        <PanelCards />
      </Container>
    </>
  );
};

export default Panel;
