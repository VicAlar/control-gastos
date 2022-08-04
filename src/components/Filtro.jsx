const Filtro = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label htmlFor="filtro">Filtrar Gastos</label>
          <select
            id="filtro"
            name="filtro"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value=""> Todas Las Categorías </option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="salud">Salud</option>
            <option value="casa">Casa</option>
            <option value="gasto">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtro;
