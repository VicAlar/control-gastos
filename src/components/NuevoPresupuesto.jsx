import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValid }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || Number(presupuesto) < 0) {
      setMensaje("El presupuesto debe ser mayor a 0");
      return;
    }

    setMensaje("");
    setIsValid(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            id="presupuesto"
            name="presupuesto"
            value={presupuesto}
            placeholder="Ingrese su presupuesto Ej: 5000"
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Asignar" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
