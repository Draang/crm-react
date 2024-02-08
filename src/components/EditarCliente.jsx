import {
  useLoaderData,
  Form,
  useNavigate,
  useActionData,
  redirect,
} from "react-router-dom";
import { getCliente, updateCliente } from "../api/clientes";
import Formulario from "./Formulario";
import Error from "./Error";

export async function loader({ params }) {
  const cliente = await getCliente(params.id);
  if (Object.values(cliente).length == 0) {
    throw new Response("", { status: 404, statusText: "No existe" });
  }
  return cliente;
}

export async function action({ request, params }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);
  const email = formData.get("email");
  let regex = new RegExp(
    // eslint-disable-next-line no-control-regex
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  let errores = [];

  if (Object.values(data).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }
  if (!regex.test(email)) {
    errores.push("Email no valido");
  }
  //retornar datos o errores
  if (Object.keys(errores).length) {
    return errores;
  }
  await updateCliente(params.id, data);
  return redirect("/");
}

export default function EditarCliente() {
  const cliente = useLoaderData();
  const navigate = useNavigate();
  const req = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        Llena todo el formulario para poder editar el cliente
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 rounded"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-15">
        {req?.length && req.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post" noValidate>
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p3 uppercase font-bold text-white text-lg rounded py-2"
            value={"Guardar Edicion"}
          />
        </Form>
      </div>
    </>
  );
}
