import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { getClientes } from "../api/clientes";
/* 
cuando el componente cargue en react router
*/
export function loader() {
  const clientes = getClientes();
  return clientes;
}
export default function Index() {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      {clientes.length ? (
        <table className="w-full bg-white shadow mt-7 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contactos</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <Cliente cliente={c} key={c.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes</p>
      )}
    </>
  );
}
