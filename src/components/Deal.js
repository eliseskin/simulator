import React, { useState, useEffect } from "react";
import DealHeader from "./deal/index";
import DHeader from "./deal/container";

const Deal = () => {
  const [newName, setNewName] = useState("");
  const [names, setNames] = useState([]);

  const onSubmitName = (e) => {
    e.preventDefault();
    addName(newName);
    window.location.href = "/start/selectDeal";
  };

  useEffect(() => {
    localStorage.setItem("nameDeal", JSON.stringify(names));
  }, [names]);

  const addName = (name) => {
    const newNames = [...names, { name: name }];
    setNames(newNames);
  };

  let name = {
    dp: "Antecedentes de Negocio",
    p: "¿Como llamaras tu empresa?",
  };

  return (
    <DHeader>
      <DealHeader name={name} />
      <form onSubmit={onSubmitName}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg my-5"
            onChange={(e) => setNewName(e.target.value)}
            name="name"
          />
          <input
            type="submit"
            className="btn btn-lg btn-primary"
            value="Esta bien"
          />
        </div>
      </form>
    </DHeader>
  );
};

export default Deal;
