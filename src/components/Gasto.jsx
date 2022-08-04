import {
  LeadingActions,
  TrailingActions,
  SwipeableListItem,
  SwipeAction,
  SwipeableList,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatMoneda, formatFecha } from "../helpers";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoGasto from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
import IconoCasa from "../img/icono_casa.svg";

const categorias = {
  ahorro: IconoAhorro,
  gasto: IconoGasto,
  ocio: IconoOcio,
  salud: IconoSalud,
  comida: IconoComida,
  suscripciones: IconoSuscripciones,
  casa: IconoCasa,
};

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { categoria, nombre, cantidad, fecha, id } = gasto;

  // Función para editar un gasto
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );

  // Función para eliminar un gasto
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={categorias[categoria]} alt={categoria} />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">{formatFecha(fecha)}</p>
            </div>
          </div>
          <p className="cantidad-gasto">{formatMoneda(cantidad)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
