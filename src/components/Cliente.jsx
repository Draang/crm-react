import PropTypes from "prop-types";
export default function Cliente({ cliente }) {
  const { id, nombre, telefono, email, empresa } = cliente;
  return (
    <tr>
      <td className="p-6 pl-10 space-y-2">
        <p className="text-xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <samp className="text-gray-800 uppercase font-bold">Email:</samp>
          {email}
        </p>
        <p className="text-gray-600">
          <samp className="text-gray-800 uppercase font-bold">Telefono:</samp>
          {telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 font-bold"
        >
          Editar
        </button>
        <button
          type="button"
          className="text-red-600 hover:text-red-700 font-bold"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

Cliente.propTypes = {
  cliente: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string,
    telefono: PropTypes.number,
    email: PropTypes.string,
    empresa: PropTypes.string,
  }),
};
