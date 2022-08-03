import { formatMoneda } from "../helpers";

const ControlPresupuesto = ({ presupuesto }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatMoneda(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span>
        </p>
        <p>
          <span>Gastado:</span>
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
