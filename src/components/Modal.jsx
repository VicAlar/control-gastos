import { useState, useEffect } from "react";
import CerrarModal from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  //Obtener el gasto a editar y pasar valores a los inputs
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, [gastoEditar]);

  // Función para cerrar el modal
  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 3000);
    }

    //Nuevo Gasto
    guardarGasto({ nombre, cantidad, categoria, id, fecha });
    ocultarModal();
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarModal} alt="cerrar" onClick={ocultarModal} />
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        {Object.keys(gastoEditar).length > 0 ? (
          <legend>Editar Gasto</legend>
        ) : (
          <legend>Nuevo Gasto</legend>
        )}
        <div className="campo">
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Añade el nombre del gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="nombre">Cantidad</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            placeholder="Añade la cantidad del gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=""> --Seleccione-- </option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="salud">Salud</option>
            <option value="casa">Casa</option>
            <option value="gasto">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input
          type="submit"
          value={
            Object.keys(gastoEditar).length > 0
              ? "Guardar Cambios"
              : "Crear Gasto"
          }
        />
      </form>
    </div>
  );
};

export default Modal;
