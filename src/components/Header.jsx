import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  setPresupuesto,
  presupuesto,
  isValid,
  setIsValid,
  gastos,
  setGastos,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValid ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setIsValid={setIsValid}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValid={setIsValid}
        />
      )}
    </header>
  );
};

export default Header;
