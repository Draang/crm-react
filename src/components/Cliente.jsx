import { Form, useNavigate, redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteCliente } from "../api/clientes";
export async function action({ params }) {
  await deleteCliente(params.id);
  return redirect("/");
}
export default function Cliente({ cliente }) {
  const { id, nombre, telefono, email, empresa } = cliente;
  const navigate = useNavigate();
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
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>
        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("Deseas eliminar este registro?")) {
              e.preventDefault(); /* Previene la accion */
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 font-bold"
          >
            Eliminar
          </button>
        </Form>
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
