export const formatMoneda = (cantidad) => {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

// Generar Id unico
export const generarId = () => {
  const random = Math.random().toString(36).substring(2, 9);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

// Formatear fecha
export const formatFecha = (fecha) => {
  const date = new Date(fecha);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return date.toLocaleDateString("es-ES", options);
};
