import { useNavigate, Form } from "react-router-dom";
import Formulario from "../components/Formulario";
export function accion() {
  console.log("formulario submiteada");
  return null
}
export default function NuevoCliente() {
  const navigate = useNavigate();
  /* Para usar formulario en el react router dom 
  1-componente form 
  2-method 
  3-accion es una funcion como el loader  
  4- el accion se pone en el main en el route*/
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
      <p className="mt-3">
        llena todo el formulario para registrar un nuevo cliente
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
        <Form method="post">
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p3 uppercase font-bold text-white text-lg rounded py-2"
            value={"Registrar Cliente"}
          />
        </Form>
      </div>
    </>
  );
}
