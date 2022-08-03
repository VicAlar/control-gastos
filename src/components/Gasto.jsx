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

const Gasto = ({ gasto }) => {
  const { categoria, nombre, cantidad, fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={categorias[categoria]} alt={categoria} />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">{fecha}</p>
        </div>
      </div>
      <p className="cantidad-gasto">${cantidad}</p>
    </div>
  );
};

export default Gasto;
