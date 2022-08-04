import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { formatMoneda } from "../helpers";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  gastos,
  setGastos,
  setPresupuesto,
  setIsValid,
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  //Calcular el porcentaje de gastos
  useEffect(() => {
    const totalGastado = gastos.reduce((acumulador, gasto) => {
      return acumulador + gasto.cantidad;
    }, 0);
    setGastado(totalGastado);
    setDisponible(presupuesto - totalGastado);
    setTimeout(() => {
      setPorcentaje(Math.round((totalGastado / presupuesto) * 100));
    }, 1200);
  }, [gastos, presupuesto]);

  //Función para resetear la App
  const handleResetApp = () => {
    const resultado = window.confirm(
      "¿Estás seguro de que quieres resetear el presupuesto?"
    );
    if (resultado) {
      setPresupuesto(0);
      setGastos([]);
      setIsValid(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#ad1515" : "#3b82f6",
            trailColor: "#e2e2e2",
            textColor: porcentaje > 100 ? "#ad1515" : "#3b82f6",
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p className="mt-1">
          <span>Presupuesto: </span>
          {formatMoneda(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""} mb-1 mt-1`}>
          <span>Disponible: </span>
          {formatMoneda(disponible)}
        </p>
        <p className="mb-1">
          <span>Gastado: </span>
          {formatMoneda(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
