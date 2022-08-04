import { useState, useEffect } from "react";
import Header from "./components/Header";
import Filtro from "./components/Filtro";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo_gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) || 0
  );
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem("gastos")) || []
  );
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  //Si se esta editando un gasto, se guarda en el state el gasto que se está editando
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar, gastos]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto);
  }, [presupuesto]);

  //Agregar el presupuesto al LocalStorage
  useEffect(() => {
    const presupuestoLocal = localStorage.getItem("presupuesto");
    if (presupuestoLocal > 0) {
      setIsValid(true);
    }
  }, []);

  //Agregar los gastos al LocalStorage
  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  //Filtrar gastos
  useEffect(() => {
    if (filtro) {
      const gastosFiltrado = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(gastosFiltrado);
    }
  }, [filtro]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  //Función para guardar gastos
  const guardarGasto = (gasto) => {
    if (gasto.id) {
      //Editar gasto
      const gastosEditados = gastos.map((gastoActual) =>
        gastoActual.id === gasto.id ? gasto : gastoActual
      );
      setGastos(gastosEditados);
      setGastoEditar({});
    } else {
      //Agregar gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    //Animación para cerrar modal
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  //Función para eliminar gastos
  const eliminarGasto = (id) => {
    setGastos(gastos.filter((gasto) => gasto.id !== id));
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
        gastos={gastos}
        setGastos={setGastos}
      />
      {isValid && (
        <>
          <main>
            <Filtro filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
